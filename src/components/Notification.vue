<template>
  <div>{{ name }} book is successfully {{ type }}</div>
</template>

<script>
export default {
  props: ["name", "type"],
};
</script>

<style scoped>
div {
  background: #7df5a5;
  padding: 15px;
  border-radius: 7px;
  margin: 5px;
}
</style>
