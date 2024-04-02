import { Comments, SingleType } from "../../../types/globalTypes";

export type PhotoCommentsProps = {
  single: SingleType;
  id: number;
  commentArray?: Comments[];
};
