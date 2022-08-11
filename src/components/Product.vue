<template>
  <li class="m-w-30 hover:scale-105 transition cursor-pointer hover:shadow-lg">
    <div class="pb-6">
      <img
        :src="product?.image"
        class="w-[114px] h-[114px] sm:w-[218px] sm:h-[218px] product-image"
        :alt="product.title"
      />
    </div>
    <h2 class="product-title">{{ product.title }}</h2>
    <p class="product-subtitle">{{ product.subtitle }}</p>
    <p class="product-amount">{{ product.amount }}</p>
  </li>
</template>
<script lang="ts">
import { Data } from "@/types";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Product",
  props: {
    product: {
      type: Object as PropType<Data>,
      required: true,
    },
  },
});
</script>
<style scoped>
.product-title {
  max-width: 114px;
  padding-bottom: 12px;
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #00284f;
}

@media screen and (min-width: 1024px) {
  .product-title {
    max-width: 214px;
    font-size: 17px;
    line-height: 20px;
  }
}

.product-title:nth-child(2n) {
  white-space: pre-wrap;
}
.product-image {
  background-color: #efefef;
  padding: 3px;
}
.product-subtitle {
  max-width: 114px;
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}

@media (min-width: 1024px) {
  .product-subtitle {
    max-width: fit-content;
    font-size: 15px;
    line-height: 15px;
  }
}

.product-amount {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 40, 79, 0.4);
}

@media screen and (min-width: 1024px) {
  .product-amount {
    font-size: 15px;
  }
}
</style>
