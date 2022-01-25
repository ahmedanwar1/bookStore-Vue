<template>
  <div class="flex">
    <h1>total: $ {{ totalCartPrice }}</h1>
    <base-card v-for="book in reservedBooks" :key="book.id">
      <img :src="book.img" />
      <div class="details">
        <span>{{ book.name }}</span>
        <div>
          <span>quantity: {{ book.count }}</span>
        </div>
        <span>total ${{ book.totalPrice }}</span>
        <button @click="removeItem(book.id)">Remove</button>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservedBooks: this.reservedBooks,
    };
  },
  computed: {
    reservedBooks() {
      return this.$store.state.reservedBooks;
    },
    totalCartPrice() {
      return this.$store.getters.totalCartPrice;
    },
  },
  methods: {
    removeItem(id) {
      this.$store.dispatch("removeItem", { id });
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
