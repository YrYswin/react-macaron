import {
  NewsItem,
  SmallImagesState,
  SetsArrayState,
  EventItemState,
  PopularSetState,
  AboutUsState,
} from "./types";

export const smallImages: SmallImagesState[] = [
  {
    src: "/image/almond.svg",
    initialTop: 0,
    initialLeft: 300,
    width: 40,
    height: 40,
    rotate: 90,
  },
  {
    src: "/image/almond.svg",
    initialTop: 170,
    initialLeft: 70,
    width: 40,
    height: 40,
    rotate: 180,
  },
  {
    src: "/image/almond.svg",
    initialTop: 390,
    initialLeft: 70,
    width: 40,
    height: 40,
    rotate: 90,
  },
  {
    src: "/image/almond.svg",
    initialTop: 380,
    initialLeft: 290,
    width: 40,
    height: 40,
    rotate: 90,
  },
  {
    src: "/image/almond.svg",
    initialTop: 401,
    initialLeft: 490,
    width: 40,
    height: 40,
    rotate: 90,
  },
  {
    src: "/image/almond.svg",
    initialTop: 260,
    initialLeft: 540,
    width: 40,
    height: 40,
    rotate: 90,
  },
  {
    src: "/image/macaron1.svg",
    initialTop: 0,
    initialLeft: 130,
    width: 100,
    height: 100,
    rotate: 0,
  },
  {
    src: "/image/macaron2.svg",
    initialTop: 20,
    initialLeft: 550,
    width: 100,
    height: 100,
    rotate: 100,
  },
  {
    src: "/image/macaron3.svg",
    initialTop: 330,
    initialLeft: 520,
    width: 100,
    height: 100,
    rotate: 100,
  },
  {
    src: "/image/macaron3.svg",
    initialTop: 380,
    initialLeft: 170,
    width: 100,
    height: 100,
    rotate: 100,
  },
  {
    src: "/image/macaron4.svg",
    initialTop: 190,
    initialLeft: -20,
    width: 130,
    height: 130,
    rotate: 100,
  },
  {
    src: "/image/macaron5.svg",
    initialTop: 180,
    initialLeft: 590,
    width: 70,
    height: 70,
    rotate: 100,
  },
  {
    src: "/image/macaron6.svg",
    initialTop: 280,
    initialLeft: 80,
    width: 100,
    height: 100,
    rotate: 100,
  },
];

export const setsArray: SetsArrayState[] = [
  {
    icon: "/icon/setsIcon1.svg",
    title: "Готовые наборы",
    text: "Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.",
    color1: "#fee9dc",
    color2: "#fde0cd",
    rotate: -23.7,
    shadow: "rgb(213, 184, 165,.6)",
  },
  {
    icon: "/icon/setsIcon2.svg",
    title: "Собрать свой набор",
    text: "Выбрать количество макарун, и выбрать вкусы.",
    color1: "#fedbe1",
    color2: "#fdccd4",
    rotate: 23.7,
    shadow: "rgb(213, 164, 162,.6)",
  },
  {
    icon: "/icon/setsIcon3.svg",
    title: "Набор с индивидуальной печатью",
    text: "Собрать набор макарон с уникальным дизайном.",
    color1: "#d3f2d3",
    color2: "#c1ecc0",
    rotate: 203.7,
    shadow: "rgb(143, 186, 142,.6)",
  },
  {
    icon: "/icon/setsIcon4.svg",
    title: "Свадебные предложения",
    text: "Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества.",
    color1: "#fce6e2",
    color2: "#fbdbd5",
    rotate: 156.2,
    shadow: "rgb(211, 178, 173,.6)",
  },
  {
    icon: "/icon/setsIcon5.svg",
    title: "Корпоративные подарки",
    text: "От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров.",
    color1: "#cceaeb",
    color2: "#b7e1e3",
    rotate: -23.7,
    shadow: "rgb(143, 185, 187,.6)",
  },
  {
    icon: "/icon/setsIcon6.svg",
    title: "Опытные поставки",
    text: "Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.",
    color1: "#ddddf3",
    color2: "#cecfee",
    rotate: 23.7,
    shadow: "rgb(166, 167, 198,.6)",
  },
];

export const EventItemArray: EventItemState[] = [
  {
    title: "Бесплатная доставка",
    image: "/image/eventImage1.png",
    text: "По СПб в районе КАД –  от 3000₽По МСК – от 5000₽",
    color: "#8cc4ec",
  },
  {
    title: "Новинка",
    image: "/image/eventImage2.png",
    text: "Шоколадное пирожное картошка на основе бисквита!",
    color: "#ff4d6d",
  },
  {
    title: "Новинка",
    image: "/image/eventImage3.png",
    text: "Аппетитные конфеты на основе миндального печенья и крема",
    color: "#ff4d6d",
  },
  {
    title: "Слдакая новинка",
    image: "/image/eventImage4.png",
    text: "Карамель на палочке из натуральных ингредиентов",
    color: "#ff4d6d",
  },
];

export const popularSets: PopularSetState[] = [
  {
    name: "Сердце",
    text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ",
    price: 2800,
    image: "/image/popularSet1.png",
  },
  {
    name: "Сердце",
    text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ",
    price: 2800,
    image: "/image/popularSet2.png",
  },
  {
    name: "Сердце",
    text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ",
    price: 2800,
    image: "/image/popularSet3.png",
  },
  {
    name: "Сердце",
    text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ",
    price: 2800,
    image: "/image/popularSet4.png",
  },
  {
    name: "Сердце",
    text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ",
    price: 2800,
    image: "/image/popularSet5.png",
  },
  {
    name: "Сердце",
    text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ",
    price: 2800,
    image: "/image/popularSet6.png",
  },
];

export const newsArray: NewsItem[] = [
  {
    image: "/image/newsImage1.png",
    title: "Скоро главный праздник весны",
    date: "25.02.2023",
    text: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы",
  },
  {
    image: "/image/newsImage2.png",
    title: "Конкурс на 23 февраля!",
    date: "17.02.2023",
    text: "День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп",
  },
  {
    image: "/image/newsImage3.png",
    title: "Экспресс-конкурс ко дню Святого Валентина",
    date: "11.02.2023",
    text: "Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп",
  },
];

export const aboutUsArray: AboutUsState[] = [
  {
    image: "/image/aboutUsImage1.png",
    title: "Лучшие ингрединты",
    text: "Что-то про суперкачество, лучших поваров, свежесть и т.д.",
  },
  {
    image: "/image/aboutUsImage2.png",
    title: "Упаковка",
    text: "Что-то про суперкоробочки и бантики и бла бла бла",
  },
  {
    image: "/image/aboutUsImage3.png",
    title: "Получение в день заказа",
    text: "В день заказа доставка курьером или самовывоз",
  },
  {
    image: "/image/aboutUsImage4.png",
    title: "Анонимная доставка",
    text: "Можем преподнести Ваш заказ как анонимный подарок",
  },
];
