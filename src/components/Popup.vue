<template>
  <form :class="{ 'popup-block': buttonTrigger, empty: !buttonTrigger }">
    <div class="popup-block__header-line">
      <p class="header-2">{{ popupName }}</p>
      <div class="popup-close" @click="TogglePopup">Cancel</div>
    </div>
    <slot />
  </form>
</template>

<script>
export default {
  props: ["buttonTrigger", "TogglePopup", "popupName"],
};
</script>

<style lang="scss">
.popup-block {
  background: #fff;
  padding: 24px 38px;
  border-radius: 4px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);
  z-index: 99;
}
.empty {
  display: none;
}

.popup-block__header-line {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: baseline;
  p {
    margin: 0;
  }
}

.popup-close {
  cursor: pointer;
  color: #3283fe;
}
</style>