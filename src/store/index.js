import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseURL: 'https://linker-api-deploy.herokuapp.com/api/',

        userEmail: "",
        userName: "",
        userPassword: "",

        userToken: localStorage.getItem("token"),

        invalidEmailError: false,
        invalidPasswordError: false,
        invalidEmailPasswordError: false,
        incorrectPasswordError: false,
        userNotFoundError: false,
        userExistsError: false,

        status: null,
        bookmarkSettingsTrigger: false,

        userCategories: [],
        userBookmarks: [],
        currentCategory: "",

        isLinks: null,

        isNewShelf: false,
        isNewBookmark: false,
        isEditShelf: false,
        isEditBookmark: false,
        loadingTrigger: null,
        settingsBlockTrigger: false
    },
    actions: {
        async loginClick(ctx, [email, password]) {
            ctx.commit("updateInvalidEmailError", false);
            ctx.commit("updateInvalidPasswordError", false);
            ctx.commit("updateInvalidEmailPasswordError", false);
            ctx.commit("updateIncorrectPasswordError", false);
            ctx.commit("updateUserNotFoundError", false);

            const data = {
                email: email,
                password: password,
            };
            this.state.userEmail = email;
            this.state.userPassword = password;

            console.log(data.email)
            console.log(data.password)

            try {
                console.log("Start login...");

                let status = await axios.post(
                    `${this.getters.baseURL}user/login`,
                    data
                );

                console.log("Successful login");
                console.log("Directing to home page");
                this.buttonText = "Waiting";
                localStorage.setItem("token", status.data.token);
                ctx.commit("updateUserToken", localStorage.getItem("token"));
                ctx.commit("updateInvalidEmailError", false);
                ctx.commit("updateInvalidPasswordError", false);
                ctx.commit("updateInvalidEmailPasswordError", false);
                ctx.commit("updateIncorrectPasswordError", false);
                ctx.commit("updateUserNotFoundError", false);

                router.push("home");
            } catch (error) {
                console.log(error)
                let errorModel = error.response.data.code;
                switch (errorModel) {
                    case "invalid_email":
                        console.log("Invalid format of email");
                        this.state.invalidEmailError = !this.state.invalidEmailError;
                        break;
                    case "invalid_password":
                        console.log("Invalid format of the pw, min 6 characters required");
                        this.state.invalidPasswordError = !this.state.invalidPasswordError;
                        break;
                    case "incorrect_password":
                        console.log("Incorrect password for user account");
                        this.state.incorrectPasswordError = !this.state.incorrectPasswordError;
                        break;
                    case "invalid_email_and_password":
                        console.log("Combination of two above codes");
                        this.state.invalidEmailPasswordError = !this.state.invalidEmailPasswordError;
                        break;
                    case "user_not_found":
                        console.log("User was not found in database");
                        this.state.userNotFoundError = !this.state.userNotFoundError;
                        break;
                    default:
                        console.log("Unknown error");
                        break;
                }
            }
        },
        async signupClick(ctx, [name, email, password]) {
            ctx.commit("updateInvalidEmailError", false);
            ctx.commit("updateInvalidPasswordError", false);
            ctx.commit("updateInvalidEmailPasswordError", false);
            ctx.commit("updateUserExistsError", false);
            const data = {
                username: name,
                email: email,
                password: password,
            };
            const dataLogin = {
                email: email,
                password: password,
            };
            try {
                console.log("Start register...");

                this.signupResponse = await axios.post(
                    `${this.getters.baseURL}user/signup`,
                    data
                );
                console.log("Successfully registered. Start logining...")

                ctx.commit("updateInvalidEmailError", false);
                ctx.commit("updateInvalidPasswordError", false);
                ctx.commit("updateInvalidEmailPasswordError", false);
                ctx.commit("updateUserExistsError", false);

                let loginResponse = await axios.post(
                    `${this.getters.baseURL}user/login`,
                    dataLogin
                );
                console.log("Success. Redirected to home...")

                localStorage.setItem("token", loginResponse.data.token);
                ctx.commit("updateUserToken", localStorage.getItem("token"));
                router.push("home");
            } catch (error) {
                console.log(error);
                let errorModel = error.response.data.code;
                switch (errorModel) {
                    case "invalid_email":
                        console.log("Invalid format of email");
                        this.state.invalidEmailError = !this.state.invalidEmailError;
                        break;
                    case "invalid_password":
                        console.log("Invalid format of the pw, min 6 characters required");
                        this.state.invalidPasswordError = !this.state.invalidPasswordError;
                        break;
                    case "invalid_email_and_password":
                        console.log("Combination of two above codes");
                        this.state.invalidEmailPasswordError = !this.state.invalidEmailPasswordError;
                        break;
                    case "user_exists":
                        console.log("User already exists in database");
                        this.state.userExistsError = !this.state.userExistsError;
                        break;
                    case "incorrect_password":
                        console.log("Incorrect password for user account");
                        this.state.incorrectPasswordError = !this.state.incorrectPasswordError;
                        break;
                    case "user_not_found":
                        console.log("User was not found in database");
                        this.state.userNotFoundError = !this.state.userNotFoundError;
                        break;
                    default:
                        console.log("Unknown error");
                        break;
                }
            }

        },
        async getUserMainInfo(ctx) {
            try {
                ctx.commit("updateLoadingTrigger", true);
                const user = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                ctx.commit("updateLoadingTrigger", false);
                const userCategories = user.data.data.categories.map(
                    (item) => {
                        return item;
                    }
                );
                const userName = user.data.data.username;

                ctx.commit('updateUserName', userName)
                ctx.commit('updateUserCategories', userCategories)

            } catch (error) {
                console.log(error.data.data.code)
            }
        },
        async getUserBookmarks(ctx, category) {
            try {
                if (category) {
                    const currentId = category._id;
                    localStorage.setItem("currentId", category._id)
                    const user = await axios.get(`${this.getters.baseURL}category/${currentId}`, {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    });
                    let userBookmarks = null;
                    if (user.data.data.links.length != 0) {
                        userBookmarks = user.data.data.links;
                        this.state.isLinks = true;
                    }
                    else if (user.data.data.links.length == 0) {
                        userBookmarks = "Have no links";
                        this.state.isLinks = false;
                    }
                    const categoryTitle = await axios.get(`${this.getters.baseURL}user/`, {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    });
                    const userCategories = categoryTitle.data.data.categories.map(
                        (item) => {
                            return item;
                        }
                    );
                    let currentCategory = userCategories.filter(word => word._id == category._id)
                    ctx.commit('updateCurrentCategory', currentCategory[0].title)
                    ctx.commit('updateUserBookmarks', userBookmarks)
                }
            } catch (error) {
                console.log(error.response.data.code)
            }
        },
        async getAllBookmarks(ctx) {
            try {
                let allBookmarksList = await axios.get(
                    `${this.getters.baseURL}bookmark/`,
                    {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    }
                );

                this.state.isLinks = true;
                let userBookmarks = null;

                userBookmarks = allBookmarksList.data.data;
                let currentCategory = "All bookmarks"
                ctx.commit('updateCurrentCategory', currentCategory)
                ctx.commit('updateUserBookmarks', userBookmarks)
            } catch (error) {
                console.log(error.response.data.code);
            }
        },
        async createCategory(ctx, [categoryTitle]) {

            try {
                const data = await {
                    title: categoryTitle,
                };

                await axios.post(`${this.getters.baseURL}category/`, data, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });

                console.log("after creating category");
                this.state.isNewShelf = !this.state.isNewShelf;


                const user = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                const userCategories = user.data.data.categories.map(
                    (item) => {
                        return item;
                    }
                );
                ctx.commit('updateUserCategories', userCategories)
            } catch (error) {
                console.log(error)
                console.log(error.response.data.code);
            }


        },
        async createBookmark(ctx, [bookmarkTitle, selected]) {
            try {
                const data = await {
                    link: bookmarkTitle,
                    category: selected.id,
                };
                await axios.post(`${this.getters.baseURL}bookmark/`, data, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                console.log("after creating bookmark");
                if (selected) {
                    const currentId = selected.id;

                    const user = await axios.get(`${this.getters.baseURL}category/${currentId}`, {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    });
                    let userBookmarks = null;
                    if (user.data.data.links.length != 0) {
                        userBookmarks = user.data.data.links;
                        this.state.isLinks = true;
                    }
                    else if (user.data.data.links.length == 0) {
                        userBookmarks = "Have no links";
                        this.state.isLinks = false;
                    }
                    ctx.commit('updateCurrentCategory', selected.title)
                    ctx.commit('updateUserBookmarks', userBookmarks)
                }
                this.state.isNewBookmark = !this.state.isNewBookmark;
            } catch (error) {
                console.log(error)
                console.log(error.response.data.code);
            }
        },
        async changeCategoryName(ctx, [editShelfName, currentCategoryId]) {
            try {
                const data = {
                    title: editShelfName,
                };

                this.category = await axios.put(
                    `${this.getters.baseURL}category/${currentCategoryId}`,
                    data,
                    {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    }
                );

                this.state.isEditShelf = !this.state.isEditShelf;
                const user = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                const userCategories = user.data.data.categories.map(
                    (item) => {
                        return item;
                    }
                );
                ctx.commit('updateUserCategories', userCategories)
            } catch (error) {
                console.log(error.data.data.code);
            }
        },
        async deleteCategory(ctx, currentCategoryId) {
            try {

                this.category = await axios.delete(
                    `${this.getters.baseURL}category/${currentCategoryId}`,
                    {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    }
                );
                this.state.isEditShelf = !this.state.isEditShelf;
                const user = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                const userCategories = user.data.data.categories.map(
                    (item) => {
                        return item;
                    }
                );
                ctx.commit('updateCurrentCategory', "Bookmarks")
                this.state.isLinks = false;
                ctx.commit('updateUserCategories', userCategories)
            } catch (error) {
                console.log(error);
                console.log(error.data.data.code);
            }
        },
        async deleteBookmark(ctx, bookmark) {
            try {
                let currentBookmarkId = bookmark._id;
                let bookmarkOwner = bookmark.category;
                this.trigger = false;
                await axios.delete(
                    `${this.getters.baseURL}bookmark/${currentBookmarkId}`,
                    {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    }
                );

                if (bookmarkOwner) {
                    const user = await axios.get(`${this.getters.baseURL}category/${bookmarkOwner}`, {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    });
                    let userBookmarks = null;
                    if (user.data.data.links.length != 0) {
                        userBookmarks = user.data.data.links;
                        this.state.isLinks = true;
                    }
                    else if (user.data.data.links.length == 0) {
                        userBookmarks = "Have no links";
                        this.state.isLinks = false;
                    }
                    const categoryTitle = await axios.get(`${this.getters.baseURL}user/`, {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    });
                    const userCategories = categoryTitle.data.data.categories.map(
                        (item) => {
                            return item;
                        }
                    );
                    let currentCategory = userCategories.filter(word => word._id == bookmarkOwner)
                    ctx.commit('updateCurrentCategory', currentCategory[0].title)
                    ctx.commit('updateUserBookmarks', userBookmarks)
                }
            } catch (error) {
                console.log(error.data.data.code);
            }
        },
        async changeBookmarkPlacing(ctx, [selected, bookmarkCategory, currentBookmarkId]) {
            try {
                const data = {
                    category: selected.id,
                };
                this.trigger = false;
                console.log(data);
                console.log("bookmark id: " + currentBookmarkId);
                await axios.put(
                    `${this.getters.baseURL}bookmark/${currentBookmarkId}`,
                    data,
                    {
                        headers: {
                            Authorization: "Bearer " + this.getters.userToken,
                        },
                    }
                );
                this.state.isEditBookmark = !this.state.isEditBookmark;
                const user = await axios.get(`${this.getters.baseURL}category/${bookmarkCategory}`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                let userBookmarks = null;
                if (user.data.data.links.length != 0) {
                    userBookmarks = user.data.data.links;
                    this.state.isLinks = true;
                }
                else if (user.data.data.links.length == 0) {
                    userBookmarks = "Have no links";
                    this.state.isLinks = false;
                }
                ctx.commit('updateUserBookmarks', userBookmarks)
            } catch (error) {
                console.log(error)
                console.log(error.response.data.code);
            }
        },
        deleteEverything(ctx) {
            ctx.commit('updateUserName', "");
            ctx.commit('updateUserCategories', []);
            ctx.commit('updateUserEmail', "");
            ctx.commit('updateUserPassword', "");
            ctx.commit('updateUserBookmark', [])
            localStorage.removeItem("token")
        }
    },
    getters: {
        loadingScreen(state) {
            return state.loadingTrigger;
        },
        userName(state) {
            return state.userName;
        },
        userPassword(state) {
            return state.userPassword;
        },
        userEmail(state) {
            return state.userEmail;
        },
        status(state) {
            return state.status;
        },
        baseURL(state) {
            return state.baseURL;
        },
        userToken(state) {
            return state.userToken;
        },
        invalidEmailError(state) {
            return state.invalidEmailError;
        },
        invalidPasswordError(state) {
            return state.invalidPasswordError;
        },
        invalidEmailPasswordError(state) {
            return state.invalidEmailPasswordError;
        },
        incorrectPasswordError(state) {
            return state.incorrectPasswordError;
        },
        userNotFoundError(state) {
            return state.userNotFoundError;
        },
        userExistsError(state) {
            return state.userExistsError
        },
        userCategories(state) {
            return state.userCategories;
        },
        userBookmarks(state) {
            return state.userBookmarks;
        },
        currentCategory(state) {
            if (state.currentCategory) {
                return state.currentCategory;
            } else {
                return "Bookmarks";
            }
        },
        isNewShelf(state) {
            return state.isNewShelf;
        },
        isNewbookmark(state) {
            return state.isNewBookmark;
        },
        isEditShelf(state) {
            return state.isEditShelf;
        },
        isEditBookmark(state) {
            return state.isEditBookmark;
        },
    },
    mutations: {
        updateLoadingTrigger(state, loadingTrigger) {
            state.loadingTrigger = loadingTrigger;
        },
        updateUserName(state, userName) {
            state.userName = userName;
        },
        updateSettingsBlockTrigger(state, settingsBlockTrigger) {
            state.settingsBlockTrigger = settingsBlockTrigger
        },
        updateUserPassword(state, userPassword) {
            state.userPassword = userPassword;
        },
        updateUserEmail(state, userEmail) {
            state.userEmail = userEmail;
        },
        updateUserToken(state, userToken) {
            state.userToken = userToken;
        },
        updateInvalidEmailError(state, invalidEmailError) {
            state.invalidEmailError = invalidEmailError;
        },
        updateInvalidPasswordError(state, invalidPasswordError) {
            state.invalidPasswordError = invalidPasswordError;
        },
        updateInvalidEmailPasswordError(state, invalidPasswordError) {
            state.invalidPasswordError = invalidPasswordError;
        },
        updateIncorrectPasswordError(state, invalidPasswordError) {
            state.invalidPasswordError = invalidPasswordError;
        },
        updateUserNotFoundError(state, userNotFoundError) {
            state.userNotFoundError = userNotFoundError;
        },
        updateUserExistsError(state, userExistsError) {
            state.userExistsError = userExistsError;
        },
        updateUserCategories(state, userCategories) {
            state.userCategories = userCategories;
        },
        updateUserBookmarks(state, userBookmarks) {
            state.userBookmarks = userBookmarks;
        },
        updateCurrentCategory(state, currentCategory) {
            state.currentCategory = currentCategory;
        },
        updateIsNewShelf(state, isNewShelf) {
            state.isNewShelf = isNewShelf;
        },
        updateIsNewBookmark(state, isNewBookmark) {
            state.isNewBookmark = isNewBookmark;
        },
        updateIsEditShelf(state, isEditShelf) {
            state.isEditShelf = isEditShelf;
        },
        updateIsEditBookmark(state, isEditBookmark) {
            state.isEditBookmark = isEditBookmark;
        }
    }
});

// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {

//         userFrame: {
//             baseURL: 'https://linker-api-deploy.herokuapp.com/api/',
//             userCategories: [],
//             userOneCategoryList: [],
//             isLinks: null,
//             currentId: localStorage.getItem("currentId"),
//             currentCategory: "",
//             bookmarkReq: null
//         },

//         auth: {
//             loginMsg: "Welcome to Linkbase",
//             signupMsg: "Welcome back to Linkbase",

//             userEmail: "",
//             userName: "",
//             userPassword: "",

//             userToken: localStorage.getItem("token"),

//             invalidEmailError: false,
//             invalidPasswordError: false,
//             invalidEmailPasswordError: false,
//             incorrectPasswordError: false,
//             userNotFoundError: false,
//             userExistsError: false,

//             errorModel: [],
//             status: null,
//         },

//     },
//     actions: {
//         async getUserCategories(ctx) {
//             try {
//                 const user = await axios.get(`${this.getters.baseURL}user/`, {
//                     headers: {
//                         Authorization: "Bearer " + this.getters.userToken,
//                     },
//                 });
//                 const userCategories = user.data.data.categories.map(
//                     (item) => {
//                         return item;
//                     }
//                 );
//                 ctx.commit('updateCategories', userCategories)
//             } catch (error) {
//                 console.log(error.data.data.code)
//             }
//         },
//         async getUserName(ctx) {
//             try {
//                 const user = await axios.get(`${this.getters.baseURL}user/`, {
//                     headers: {
//                         Authorization: "Bearer " + this.getters.userToken,
//                     },
//                 });
//                 console.log("get username: " + user.data.data.username)
//                 const userName = user.data.data.username;
//                 ctx.commit('updateUserName', userName)
//             } catch (error) {
//                 console.log(error.data.data.code)
//             }
//         },
//         async getUserOneCategoryList(ctx, category) {
//             try {
//                 if (category) {
//                     const currentId = category._id;
//                     localStorage.setItem("currentId", category._id)
//                     const user = await axios.get(`${this.getters.baseURL}category/${currentId}`, {
//                         headers: {
//                             Authorization: "Bearer " + this.getters.userToken,
//                         },
//                     });
//                     let userOneCategoryList = null;
//                     if (user.data.data.links.length != 0) {
//                         userOneCategoryList = user.data.data.links;
//                         this.state.isLinks = true;
//                     }
//                     else if (user.data.data.links.length == 0) {
//                         userOneCategoryList = "Have no links";
//                         this.state.isLinks = false;
//                     }
//                     const categoryTitle = await axios.get(`${this.getters.baseURL}user/`, {
//                         headers: {
//                             Authorization: "Bearer " + this.getters.userToken,
//                         },
//                     });
//                     const userCategories = categoryTitle.data.data.categories.map(
//                         (item) => {
//                             return item;
//                         }
//                     );
//                     let currentCategory = userCategories.filter(word => word._id == category._id)
//                     ctx.commit('updateCurrentCategory', currentCategory[0].title)
//                     ctx.commit('updateUserOneCategoryList', userOneCategoryList)
//                 }
//             } catch (error) {
//                 console.log(error.response.data.code)
//             }
//         },
//         async getAllBookmarks(ctx) {
//             try {
//                 const allBookmarksList = await axios.get(
//                     `${this.getters.baseURL}bookmark/`,
//                     {
//                         headers: {
//                             Authorization: "Bearer " + this.getters.userToken,
//                         },
//                     }
//                 );

//                 this.state.isLinks = true;
//                 let userOneCategoryList = null;

//                 userOneCategoryList = allBookmarksList.data.data;
//                 let currentCategory = "All bookmarks"
//                 ctx.commit('updateCurrentCategory', currentCategory)
//                 ctx.commit('updateUserOneCategoryList', userOneCategoryList)
//             } catch (error) {
//                 console.log(error.response.data.code);
//             }
//         },
//         async createCategory(ctx, newShelf) {
//             try {
//                 const data = {
//                     title: newShelf.categoryTitle,
//                 };
//                 await axios.post(
//                     `${this.$store.getters.baseURL}category/`,
//                     data,
//                     {
//                         headers: {
//                             Authorization: "Bearer " + this.$store.getters.userToken,
//                         },
//                     }
//                 );
//                 const userCategoriesList = await axios.get(`${this.getters.baseURL}user/`, {
//                     headers: {
//                         Authorization: "Bearer " + this.getters.userToken,
//                     },
//                 });
//                 const userCategories = userCategoriesList.data.data.categories.map(
//                     (item) => {
//                         return item;
//                     }
//                 );
//                 ctx.commit('updateCategories', userCategories)
//             } catch (error) {
//                 console.log(error.response.data.code);
//             }

//             this.newShelf.isNewShelf = !this.newShelf.isNewShelf;
//         },
//         async deleteBookmark(ctx, bookmark) {
//             try {
//                 let currentBookmarkId = bookmark._id;
//                 let bookmarkReq = await axios.delete(
//                     `${this.$store.getters.baseURL}bookmark/${currentBookmarkId}`,
//                     {
//                         headers: {
//                             Authorization: "Bearer " + this.$store.getters.userToken,
//                         },
//                     }
//                 );
//                 this.isEditBookmark = !this.isEditBookmark;
//                 ctx.commit('deleteBookmark', bookmarkReq)
//             } catch (error) {
//                 console.log(error.data.data.code);
//             }
//         },
//         async loginClick() {

//             const data = {
//                 email: this.getters.userEmail,
//                 password: this.getters.userPassword,
//             };
//             try {
//                 console.log("Start login...");

//                 this.getters.status = await axios.post(
//                     `${this.$store.getters.baseURL}user/login`,
//                     data
//                 );

//                 console.log("Successful login")

//                 localStorage.setItem("token", this.status.data.token);
//                 this.$store.state.userToken = localStorage.getItem("token");
//                 console.log(this.$store.getters.userToken);
//                 console.log(this.status);

//                 this.$router.push("home");
//             } catch (error) {
//                 console.log(error.response.data.code);
//                 this.errorModel = error.response.data.code;
//                 switch (this.errorModel) {
//                     case "invalid_email":
//                         console.log("Invalid format of email");
//                         this.invalidEmailError = !this.invalidEmailError;
//                         break;
//                     case "invalid_password":
//                         console.log("Invalid format of the pw, min 6 characters required");
//                         this.invalidPassword = !this.invalidPassword;
//                         break;
//                     case "incorrect_password":
//                         console.log("Incorrect password for user account");
//                         this.incorrectPassword = !this.incorrectPassword;
//                         break;
//                     case "invalid_email_and_password":
//                         console.log("Combination of two above codes");
//                         this.invalidEmailPasswordError = !this.invalidEmailPasswordError;
//                         break;
//                     case "user_not_found":
//                         console.log("User was not found in database");
//                         this.userNotFoundError = !this.userNotFoundError;
//                         break;
//                     default:
//                         console.log("Unknown error");
//                         break;
//                 }
//             }
//         },
//     },
//     mutations: {
//         deleteBookmark(state, bookmarkReq) {
//             state.bookmarkReq = bookmarkReq;
//         },
//         updateCategories(state, userCategories) {
//             state.userFrame.userCategories = userCategories;
//         },
//         updateUserName(state, userName) {
//             state.userFrame.userName = userName;
//         },
//         updateUserPassword(state, userPassword) {
//             state.userFrame.userPassword = userPassword;
//         },
//         updateUserEmail(state, userEmail) {
//             state.userFrame.userEmail = userEmail;
//         },
//         updateCurrentId(state, currentId) {
//             console.log(currentId + " from mutation")
//             state.userFrame.currentId = currentId;
//             console.log(state.userFrame.currentId + " after setting")
//         },
//         updateUserOneCategoryList(state, userOneCategoryList) {
//             state.userFrame.userOneCategoryList = userOneCategoryList;
//         },
//         updateCurrentCategory(state, currentCategory) {
//             state.currentCategory = currentCategory;
//         }
//     },
//     getters: {
//         userName(state) {
//             return state.auth.userName;
//         },
//         userPassword(state) {
//             return state.auth.userPassword;
//         },
//         userEmail(state) {
//             return state.auth.userEmail;
//         },
//         status(state) {
//             return state.auth.status;
//         },
//         baseURL(state) {
//             return state.baseURL;
//         },
//         currentCategory(state) {
//             if (state.currentCategory) {
//                 return state.currentCategory;
//             } else {
//                 return "Bookmarks";
//             }
//         },
//         userToken(state) {
//             return state.userToken;
//         },
//         userCategories(state) {

//             return state.userFrame.userCategories;
//         },
//         userOneCategoryList(state) {
//             return state.userFrame.userOneCategoryList;
//         },
//         activeCategoryId(state) {
//             console.log(state.userFrame.currentId)
//             return state.userFrame.currentId;
//         },
//     },
// })