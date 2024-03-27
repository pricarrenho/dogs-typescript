import { Comments, SingleType } from "../../../types/types";

export type PhotoCommentss = {
  single: SingleType;
  id: number;
  commentArray?: Comments[];
};
