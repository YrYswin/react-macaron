export interface SmallImagesState {
  src: string;
  initialTop: number;
  initialLeft: number;
  width: number;
  height: number;
  rotate: number;
}

export interface Kit {
  id: number;
  text: string;
}

export interface Images {
  "img-1": string;
  "img-2": string;
  "img-3": string;
}

export interface ProductKit {
  id: number;
  title: string;
  descriprion: string;
  price: number;
  img: string;
  apple: string;
  cherry: string;
  coconut: string;
  text: string;
  detailImage: Images;
}

export interface MoreDetail {
  id: number;
  img: string;
  text: string;
}

export type ItemType = SmallImagesState & Kit & ProductKit & MoreDetail;

export interface SetsArrayState {
  icon: string;
  title: string;
  text: string;
  color1: string;
  color2: string;
  rotate: number;
  shadow: string;
}

export interface EventItemState {
  title: string;
  text: string;
  image: string;
  color: string;
}

export interface PopularSetState {
  name: string;
  text: string;
  price: number;
  image: string;
}

export interface NewsItem {
  date: string;
  image: string;
  title: string;
  text: string;
}

export interface AboutUsState {
  image: string;
  title: string;
  text: string;
}

export interface PagesState {
  pathname: string;
  name: string;
}
