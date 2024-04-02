import { Photo } from "../../../types/globalTypes";

export type FeedModalProps = {
  photo: Photo;
  setModalPhoto: (value: Photo | null) => void;
};
