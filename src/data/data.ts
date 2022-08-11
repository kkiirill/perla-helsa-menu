import { Data } from "@/types";

export const data: Data[] = [
  {
    id: 1,
    image: require("../assets/1_cod_1.png"),
    category: 'omega',
    title: 'Коллаген',
    subtitle: 'Пептиды 1-типа из Франции',
    amount: '30 порций в стиках'
  },
  {
    id: 2,
    image: require("../assets/1_cod_2.png"),
    category: 'omega',
    title: 'Витамин D3',
    subtitle: 'Пептиды 1-типа из Франции',
    amount: '60 капсул'
  },
  {
    id: 3,
    image: require("../assets/1_tuna_1.png"),
    category: 'omega',
    title: 'Омега-3 Треска',
    subtitle: 'Пептиды 1-типа из Франции',
    amount: '120 капсул'
  },
  {
    id: 4,
    image: require("../assets/1_tuna_2.png"),
    category: 'omega',
    title: 'Омега-3 Тунец',
    subtitle: 'Пептиды 1-типа из Франции',
    amount: '120 капсул'
  },
];
console.log(data[0].image)