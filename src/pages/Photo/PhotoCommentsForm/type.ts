import { Comments } from "../../../types/types";

export type PhotoCommentsFormProps = {
  id: number;
  single: boolean;
  comments?: Comments[];
  setComments: React.Dispatch<React.SetStateAction<Comments[] | undefined>>;
};
