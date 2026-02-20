import React from "react";
import clsx from "clsx";
import { typographyStyles } from "./typography.config";

const Typography = ({
  variant = "p",
  as,
  className = "",
  children,
  dangerouslySetInnerHTML,
}) => {
  const defaultTag = variant.split("_")[0];
  const Tag = as || defaultTag;
  const styles =
    typographyStyles[variant] || typographyStyles[defaultTag] || {};

  return (
    <Tag
      className={clsx(styles.base, styles.sm, styles.md, styles.lg, className)}
      {...(dangerouslySetInnerHTML
        ? { dangerouslySetInnerHTML }
        : { children })}
    />
  );
};

export default Typography;
