<template>
  <div>
    <p></p>
    <select name="">
      <option
        v-for="(category, index) in categories"
        :key="index"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style>
</style>