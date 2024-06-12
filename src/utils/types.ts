export interface SmallImagesState {
  src: string;
  initialTop: number;
  initialLeft: number;
  width: number;
  height: number;
  rotate: number;
}

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
