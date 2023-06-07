import React, { useState } from "react";
import styles from "@styles/TextIntro/index.module.scss";
import classNames from "classnames";
import { StructuredText } from "react-datocms";
import DescriptionList from "@components/UtilityComponents/DescriptionList";

const TextIntro = (props) => {
  const [data, setData] = useState(props || null);
  const {
    title,
    subtitle,
    description,
    roles,
    titleSize,
    subtitleSize,
    componentPadding,
  } = data;

  return (
    <div
      className={classNames(
        styles.container,
        "padding-x-sm",
        ...(componentPadding && componentPadding)
      )}
    >
      <div className={classNames(styles.heading)}>
        <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
          {title}
        </div>
        <div className={classNames(`u-subheading--${subtitleSize}`)}>
          {subtitle}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <StructuredText data={description} />
        </div>
        <div>
          <DescriptionList props={roles} />
        </div>
      </div>
    </div>
  );
};
export default TextIntro;
