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
