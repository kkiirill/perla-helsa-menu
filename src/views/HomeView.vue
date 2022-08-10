<template>
  <div class="home h-screen">
    <Header @toggle="toogle" @toggleMenu="toggleMenu" />
    <transition name="slide-fade" mode="out-in">
      <Hero v-show="show" />
    </transition>
    <transition name="slide-fade" mode="out-in">
      <Menu v-show="showMenu" @closeMenu="closeMenu"
    /></transition>
  </div>
</template>
<script lang="ts">
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import { data } from "@/data/data";
import { Data } from "@/types";
import { defineComponent } from "vue";
import Menu from "@/components/Menu.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Header,
    Hero,
    Menu,
  },
  data() {
    return {
      products: data as Data[],
      show: false as boolean,
      showMenu: false as boolean,
    };
  },
  methods: {
    toogle() {
      this.show = !this.show;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
});
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
