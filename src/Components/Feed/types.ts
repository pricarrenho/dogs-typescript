import { Photo } from "../../types/types";

export type FeedProps = {
  user: number;
};

export type FeedModalProps = {
  photo: Photo;
  setModalPhoto: (value: Photo | null) => void;
};

export type FeedPhotosProps = {
  page: number;
  user: number;
  setModalPhoto: (value: Photo) => void;
  setInfinite: (value: boolean) => void;
};

export type FeedPhotosItemProps = {
  photo: Photo;
  setModalPhoto: (value: Photo) => void;
};
