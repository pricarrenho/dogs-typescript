export type TokenPostProps = {
  username: string;
  password: string;
};

export type UserPostProps = {
  username: string;
  email: string;
  password: string;
};

export type PhotosGetProps = {
  page: number;
  total: number;
  user: string;
};

export type PhotosPostProps = {
  formData: FormData;
  token: string | null;
};

export type CommentPostProps = {
  id: number;
  comment: string;
  token: string | null;
};

export type PhotosDeleteProps = {
  id: number;
  token: string | null;
};

export type PasswordLostProps = {
  login: string;
  url: string;
};

export type PasswordResetProps = {
  login: string;
  key: string;
  password: string;
};
