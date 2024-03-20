import { Dispatch, SetStateAction } from "react";
import { PhotoProps } from "../../pages/Photo/types";

export type FeedProps = {
  user: string;
};

export type FeedModalProps = {
  photo: PhotoProps;
  setModalPhoto: Dispatch<SetStateAction<null>>;
};

export type FeedPhotosProps = {
  page: number;
  user: string;
  setModalPhoto: any;
  setInfinite: any;
};

export type FeedPhotosItemProps = {
  photo: PhotoProps;
  setModalPhoto: (value: PhotoProps) => void;
};
