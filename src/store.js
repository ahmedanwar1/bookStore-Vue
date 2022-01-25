import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      booklist: [
        {
          id: 1,
          name: "Harry Potter: The chamber of secrets",
          price: 250,
          img:
            "https://new.cima-now.com/wp-content/uploads/2021/01/%D9%81%D9%8A%D9%84%D9%85-Harry-Potter-and-the-Chamber-of-Secrets-2002-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg",
        },
        {
          id: 2,
          name: "The Invisible Man",
          price: 120,
          img: "https://images.penguinrandomhouse.com/cover/9780451531674",
        },
        {
          id: 3,
          name: "Atomic Habits",
          price: 70,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL.jpg",
        },
      ],
      reservedBooks: [],
      notificationList: [],
    };
  },
  getters: {
    totalCartPrice(state) {
      let totalCartPrice = 0;
      state.reservedBooks.forEach((element) => {
        totalCartPrice += element.totalPrice;
      });
      return totalCartPrice;
    },
    cartItemCount(state) {
      let cartCount = 0;
      state.reservedBooks.forEach((element) => {
        cartCount += element.count;
      });
      return cartCount;
    },
    reservedBooks(state) {
      return state.reservedBooks;
    },
    notificationList(state) {
      return state.notificationList;
    },
  },
  mutations: {
    addItem(state, payload) {
      let flag = false;
      state.reservedBooks.forEach((element) => {
        if (element.id == payload.id) {
          console.log(element.id);
          element.count++;
          element.totalPrice = element.price * element.count;
          flag = true;
        }
      });
      if (!flag) {
        const bookItem = state.booklist.find((book) => book.id == payload.id);

        bookItem.count = 1;
        bookItem.totalPrice = bookItem.price;

        state.reservedBooks.push(bookItem);
      }
      const isAdded = state.reservedBooks.find((book) => book.id == payload.id);
      if (isAdded) {
        state.notificationList.unshift({
          name: isAdded.name,
          type: "added",
          id:
            Math.round(Math.random() + 5) * Math.round(Math.random() + 5) * 456,
        });
        setTimeout(() => {
          state.notificationList.pop();
        }, 3000);
      }
    },

    removeItem(state, payload) {
      state.reservedBooks = state.reservedBooks.filter(
        (book) => book.id != payload.id
      );
      const isAdded = state.reservedBooks.find((book) => book.id == payload.id);
      if (!isAdded) {
        state.notificationList.unshift({
          name: "Item",
          type: "removed",
          id:
            Math.round(Math.random() + 5) * Math.round(Math.random() + 5) * 456,
        });
        setTimeout(() => {
          state.notificationList.pop();
        }, 3000);
      }
    },
  },
  actions: {
    addItem(context, payload) {
      context.commit("addItem", payload);
    },
    removeItem(context, payload) {
      context.commit("removeItem", payload);
    },
  },
});

export default store;
