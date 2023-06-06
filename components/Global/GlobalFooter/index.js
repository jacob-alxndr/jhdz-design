import React from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import classNames from "classnames";

const GlobalFooter = (props) => {
  return (
    <footer className={classNames(styles.container, "padding-x-sm")}>
      <div className={styles.content}>
        <div className={classNames(styles.legal, "u-heading--h3")}>
          &copy; {process.env.NEXT_PUBLIC_SITE_NAME} {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
