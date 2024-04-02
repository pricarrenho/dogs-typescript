import { Photo } from "../../../types/globalTypes";

export type FeedPhotosProps = {
  page: number;
  user: number;
  setModalPhoto: (value: Photo) => void;
  setInfinite: (value: boolean) => void;
};
