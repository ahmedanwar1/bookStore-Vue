<template>
  <nav>
    <router-link to="/Home">Home</router-link>
    <router-link to="/cart"
      >Cart (<span>{{ cartItemCount }}</span
      >)</router-link
    >
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <transition-group tag="ul" name="notify">
    <li v-for="item in notificationList" :key="item.id">
      <notification :name="item.name" :type="item.type" />
    </li>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      notificationList: this.notificationList,
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    notificationList() {
      return this.$store.getters.notificationList;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
nav {
  background: #4a9599;
  color: #fff;
  padding: 20px;
  font-size: 18px;
}

button {
  display: inline-block;
  padding: 11px;
  margin-top: 12px;
  background-color: #68d568;
  color: #000;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

button:focus {
  box-shadow: 0px 0px 0px 3px #9edda6;
}

.router-link-active {
  background: #9bdbba;
  padding: 20px;
  color: #000;
}

a {
  color: #fff;
  text-decoration: none;
  margin: 50px;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
ul {
  list-style-type: none;
  bottom: 15px;
  right: 17px;
  position: fixed;
  width: 450px;
}

li {
  width: 450px;
}

.route-enter-from,
.route-leave-to {
  transform: scale(0.2);
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease-in-out;
}

.route-enter-to,
.route-leave-from {
  transform: scale(1);
  opacity: 1;
}

.notify-enter-active {
  animation: fadeIn 0.3s ease-in-out;
}
.notify-move {
  transition: all 0.3s ease-out;
}

.notify-leave-active {
  animation: fadeOut 0.3s ease-in-out;
  position: absolute;
}

/* animation */

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
