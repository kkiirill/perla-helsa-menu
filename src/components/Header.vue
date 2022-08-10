<template>
  <header class="bg-white px-9 pb-4 md:pb-6 z-0">
    <div class="container flex justify-between pb-9 md:pb-10 pt-16 mx-auto">
      <div class="flex justify-center items-center">
        <button @click="toggleMenu">
          <img
            src="../assets/menu.png"
            alt=""
            class="w-5 h-4 md:w-[26px] md:h-[18px] mr-5 md:mr-9"
          />
        </button>
        <button>
          <img
            src="../assets/search.png"
            alt=""
            class="w-4 h-4 md:w-[22px] md:h-[22px]"
          />
        </button>
      </div>
      <div class="">
        <router-link to="/">
          <img
            src="../assets/logo.png"
            alt="logo"
            class="w-[102px] h-4 md:w-[192px] md:h-[32px]"
          />
        </router-link>
      </div>
      <div class="flex justify-center items-center">
        <router-link to="/login">
          <img
            src="../assets/login.png"
            alt=""
            class="w-4 h-4 md:w-5 md:h-6 mr-5 md:mr-9"
          />
        </router-link>
        <router-link to="/">
          <img
            src="../assets/cart.png"
            alt=""
            class="w-4 h-4 md:w-[28px] md:h-[25px]"
          />
        </router-link>
      </div>
    </div>
    <nav>
      <ul class="flex justify-center items-center">
        <li><button class="pr-9 md:pr-12" @click="toggle">Омега-3</button></li>
        <li><button class="pr-9 md:pr-12">Витамины</button></li>
        <li>
          <button class="pr-9 md:pr-12">Добавки</button>
        </li>
        <li class="hidden md:block">
          <button class="pr-9 md:pr-12">Доcтавка</button>
        </li>
        <li><button class="">О нас</button></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  methods: {
    toggle() {
      this.$emit("toggle");
    },
    toggleMenu() {
      this.$emit("toggleMenu");
    }
  },
});
</script>

<style scoped>
li {
  margin: 0;
  font-size: 15px;
  line-height: 18px;
}

li:hover {
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  li {
    font-size: 17px;
    line-height: 20px;
  }
}
</style>
