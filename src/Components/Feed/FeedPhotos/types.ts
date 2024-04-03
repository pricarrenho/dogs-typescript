import { Photo } from "../../../types/globalTypes";

export type FeedPhotosProps = {
  page: number;
  user: string;
  setModalPhoto: (value: Photo) => void;
  setInfinite: (value: boolean) => void;
};
