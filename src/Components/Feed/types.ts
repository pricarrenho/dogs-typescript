import { PhotoProps } from "../../pages/Photo/types";

export type FeedProps = {
  user: string;
};

export type FeedModalProps = {
  photo: PhotoProps;
  setModalPhoto: any;
};
