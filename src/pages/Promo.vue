<template>
  <div>
    <img :src="favico" alt="" width="24px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      favico:
        "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com",
    };
  },
};
</script>