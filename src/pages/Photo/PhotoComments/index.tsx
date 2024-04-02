import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { PhotoCommentsForm } from "../PhotoCommentsForm";
import { Comments } from "../../../types/globalTypes";
import { PhotoCommentsProps } from "./types";
import styles from "./styles.module.css";

export const PhotoComments = ({
  single,
  id,
  commentArray,
}: PhotoCommentsProps) => {
  const [comments, setComments] = useState<Comments[] | undefined>(
    commentArray
  );

  const commentsSection = useRef<HTMLUListElement>(null);

  const { login } = useContext(UserContext);

  useEffect(() => {
    if (commentsSection?.current) {
      commentsSection.current.scrollTop =
        commentsSection?.current?.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {comments?.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setComments={setComments}
          comments={comments}
        />
      )}
    </>
  );
};
