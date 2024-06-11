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

export interface ProductKit {
  id: number;
  title: string;
  descriprion: string;
  price: number;
  img: string;
}

export type ItemType = SmallImagesState & Kit & ProductKit;
