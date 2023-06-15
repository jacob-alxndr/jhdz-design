import React, { useState } from "react";
import styles from "../../styles/components/Promo/index.module.scss";
import clsx from "clsx";
import Default from "./components/default";

const Promo = (props) => {
  const { alignment, classes, index, componentPadding } = props;
  console.log("props alignment", alignment);

  return (
    <div
      index={index}
      className={clsx(
        styles.container,
        styles[`align--${alignment}`],
        "padding-x-sm",
        ...(componentPadding && componentPadding),
        classes
      )}
    >
      <Default data={props} />
    </div>
  );
};

export default Promo;
