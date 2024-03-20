import React, { useEffect } from "react";
import { HeadProps } from "./types";

export const Head = ({ title, description }: HeadProps) => {
  useEffect(() => {
    document.title = title + " | Dogs";
    document
      ?.querySelector("meta[name='description']")
      ?.setAttribute("content", description || "");
  }, [description, title]);

  return <></>;
};
