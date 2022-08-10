<template>
  <div class="menu px-9 xl:p-0 z-2">
    <div class="xl:max-w-[432px] bg-white xl:px-11">
      <div
        class="flex flex-row-reverse pt-9 cursor-pointer xl:flex-row"
        @click="closeMenu"
      >
        <img src="../assets/close.png" alt="Close" class="w-3 h-3" />
      </div>
      <template>
      
      
      </template>
      <nav v-show="!showAdult">
        <ul class="menu-list" v-show="!showKids">
          <li class="font-semibold pb-9">
            <router-link to="/">Все продукты</router-link>
          </li>
          <li class="flex pb-7">
            <p to="/" class="pr-5">Продукты для взрослых</p>
            <div
              class="flex items-center cursor-pointer"
              @click="toggleShowAdult"
            >
              <img src="../assets/RectangleOpen.png" class="w-2.5 h-2.5" />
            </div>
          </li>
          <li class="flex pb-9">
            <p to="/" class="pr-5">Продукты для детей</p>

            <div
              class="flex items-center cursor-pointer"
              @click="toggleShowKids"
            >
              <img src="../assets/RectangleOpen.png" class="w-2.5 h-2.5" />
            </div>
          </li>
          <div class="hidden xl:block menu-border-desktop"></div>
          <li class="pb-7 xl:pb-8 font-semibold">
            <router-link to="/">О компании</router-link>
          </li>
          <li class="pb-7 xl:pb-8 font-semibold">
            <router-link to="/">Сертификаты</router-link>
          </li>
          <li class="pb-7 xl:pb-8 font-semibold">
            <router-link to="/">Вопрос-ответ</router-link>
          </li>
          <li class="pb-[210px] xl:pb-[304px] font-semibold">
            <router-link to="/">Блог</router-link>
          </li>

          <li class="pb-7 xl:pb-8 font-semibold">
            <router-link to="/">Доставка и оплата</router-link>
          </li>
          <li class="pb-7 xl:pb-8 font-semibold">
            <router-link to="/">Контакты</router-link>
          </li>
          <li class="pb-[50px] xl:pb-8-[50px] font-semibold">
            <router-link to="/">Вакансии</router-link>
          </li>
        </ul>
      </nav>
      <nav v-show="showAdult">
        <ul class="menu-list xl:h-screen z-2">
          <div class="flex items-center pb-8">
            <img
              src="../assets/RectangleClose.png"
              class="w-2.5 h-2.5 cursor-pointer"
              @click="closeShowAdult"
            />
            <p class="pl-5 font-semibold">Продукты для взрослых</p>
          </div>
          <li class="flex pb-8 xl:pb-9">
            <router-link to="/" class="block pr-5">Все</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Коллаген</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Омега-3 Тунец</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Витамин Д3 2000 МЕ</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Витамин Д3 5000 МЕ</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Витамин Д3 + K2</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Сквален</router-link>
          </li>
          <li class="pb-[261px]">
            <router-link to="/">Акулий жир</router-link>
          </li>
        </ul>
      </nav>
      <nav v-show="showKids">
        <ul class="menu-list pb-[487px]">
          <div class="flex items-center pb-8">
            <img
              src="../assets/RectangleClose.png"
              class="w-2.5 h-2.5 cursor-pointer"
              @click="closeShowKids"
            />
            <p to="/" class="pl-5 xl:pl-6 font-semibold">Продукты для детей</p>
          </div>
          <li class="flex pb-8 xl:pb-9">
            <router-link to="/" class="block pr-5">Все</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Kids Омега-3 Тунец</router-link>
          </li>
          <li class="pb-8 xl:pb-9">
            <router-link to="/">Kids Омега-3 Треска</router-link>
          </li>
          <li class="pb-8 xl:pb-[260px]">
            <router-link to="/">Kids Витамин Д3</router-link>
          </li>
        </ul>
      </nav>
      <div v-if="!showAdult" v-show="!showKids">
        <div class="flex items-center justify-center mb-12 xl:mb-[26px]">
          <div class="pr-4">
            <img src="../assets/phone.png" class="w-4 h-4" />
          </div>
          <p class="menu-number font-semibold text-[22px]">0 800 330 039</p>
          <span class="menu-text font-semibold"
            >Call-центр работает с 7:00 до 23:00</span
          >
        </div>
      </div>
      <div v-if="!showAdult" v-show="!showKids">
        <div class="menu-border mb-12"></div>
        <div class="flex justify-between pb-[60px]">
          <div>
            <h2>Доставка</h2>
            <div class="flex items-center">
              <p class="pr-[15px] font-semibold">Украина</p>
              <img
                src="../assets/RectangleDown.png"
                class="block w-[9px] h-[9px] cursor-pointer"
              />
            </div>
          </div>
          <div>
            <h2>Язык</h2>
            <div class="flex items-center">
              <p class="pr-[15px] font-semibold">Русский</p>
              <img
                src="../assets/RectangleDown.png"
                class="w-[9px] h-[9px] cursor-pointer"
              />
            </div>
          </div>
          <div>
            <h2>Валюта</h2>
            <div class="flex items-center">
              <p class="pr-[15px] font-semibold">Грн</p>
              <img
                src="../assets/RectangleDown.png"
                class="w-[9px] h-[9px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Menu",
  data() {
    return { showAdult: false as boolean, showKids: false as boolean };
  },
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
    toggleShowAdult() {
      this.showAdult = true;
    },
    toggleShowKids() {
      this.showKids = true;
    },
    closeShowAdult() {
      this.showAdult = false;
    },
    closeShowKids() {
      this.showKids = false;
    },
  },
});
</script>
<style sccoped>
.menu {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
}

.menu-list {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
}

@media screen and (min-width: 1280px) {
  .menu-list {
    padding-top: 89px;
  }
}

@media screen and (min-width: 1280px) {
  .menu {
    background-color: #ededed80;
  }
}

li {
  font-size: 16px;
  line-height: 19px;
  color: #00284f;
}

@media screen and (min-width: 1024px) {
  li {
    font-size: 16px;
  }
}

.menu-number {
  padding-right: 26px;
  font-size: 22px;
  line-height: 26px;
}

.menu-text {
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 40, 79, 0.3);
  max-width: 121px;
}

.menu-border {
  border-bottom: 1.3px solid rgba(0, 40, 79, 0.1);
}

.menu-border-desktop {
  margin: 8px 0 36px 0;
  border-bottom: 1px solid rgba(0, 40, 79, 0.1);
}

h2 {
  padding-bottom: 12px;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 40, 79, 0.3);
}
p {
  padding-right: 15px;
}
</style>
