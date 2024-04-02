import { Comments } from "../../../types/globalTypes";

export type PhotoCommentsFormProps = {
  id: number;
  single: boolean;
  comments?: Comments[];
  setComments: React.Dispatch<React.SetStateAction<Comments[] | undefined>>;
};
