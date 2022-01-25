<template>
  <div class="flex">
    <base-card v-for="book in booklist" :key="book.id">
      <img :src="book.img" />
      <div class="details">
        <span>{{ book.name }}</span>
        <div>
          <span>${{ book.price }}</span>
        </div>
        <button @click="addItem(book.id)">Add</button>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booklist: this.booklist,
    };
  },
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", { id });
    },
  },
  computed: {
    booklist() {
      return this.$store.state.booklist;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 450px;
}

img,
div {
  border-radius: 7px;
}

.details {
  padding: 15px;
}
</style>
