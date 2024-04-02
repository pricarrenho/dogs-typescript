import { Photo } from "../../../types/globalTypes";

export type FeedPhotosItemProps = {
  photo: Photo;
  setModalPhoto: (value: Photo) => void;
};
