import React from "react";
import styles from "../../../../styles/components/Promo/index.module.scss";
import { StructuredText } from "react-datocms";
import clsx from "clsx";
const Default = (props) => {
  const { eyebrow, content, title, alignment, textBlockWidth } = props?.data;
  console.log("textBlockWidth", textBlockWidth);
  return (
    <>
      <div className={clsx(styles.textContent, styles[textBlockWidth])}>
        {title && <span className={styles.title}>{title}</span>}
        {content && (
          <div className={clsx(styles.description)}>
            <StructuredText data={content} />
          </div>
        )}
      </div>
    </>
  );
};
export default Default;
