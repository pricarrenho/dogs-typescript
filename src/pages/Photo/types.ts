export type DataProps = {
  comments: CommentsProp[];
  photo: PhotoProps;
};

export type PhotoProps = {
  acessos: string;
  author: string;
  date: string;
  id: number;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
};

export type PhotoContentProps = {
  data: DataProps;
  single: SingleType;
};

export type PhotoCommentsProps = {
  single: SingleType;
  id: number;
  commentArray?: CommentsProp[];
};

export type CommentsProp = {
  comment_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoCommentsFormProps = {
  id: number;
  single: SingleType;
  setComments: any;
};

export type SingleType = boolean;
