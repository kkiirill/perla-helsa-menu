<template>
  <main class="xl:block px-9 md:px10 hero z-0">
    <div class="container flex justify-between m-auto hero-content">
      <div class="hidden xl:block">
        <ul class="flex flex-col">
          <li>
            <button class="hero-item">Most popular searches</button>
          </li>
          <li><router-link to="/">Коллаген</router-link></li>
          <li><router-link to="/">Омега-3</router-link></li>
          <li><router-link to="/">Витамин Д3</router-link></li>
          <li><router-link to="/">Сквален</router-link></li>
          <li><router-link to="/">Витамины для детей</router-link></li>
        </ul>
      </div>
      <div class="">
        <span class="hidden lg:block hero-text"
          >Популярное в этой категории</span
        >
          <ul
            v-show="products"
            class="flex flex-wrap justify-between items-center pt-12 lg:pt-6 gap-[30px] 2xl:gap-[60px] 2xl:pr-14"
          >
            <Product
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { data } from "@/data/data";
import { Data } from "@/types";
import { defineComponent } from "vue";
import Product from "./Product.vue";
export default defineComponent({
  name: "Hero",
  data() {
    return {
      products: data as Data[],
    };
  },
  components: { Product },
});
</script>
<style scoped>
.hero {
  background: #f9f9f9;
}
.hero-content {
  padding-top: 62px;
}
li {
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 28px;
}

.hero-item {
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 40, 79, 0.4);
}

.hero-text {
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 40, 79, 0.4);
}
</style>
