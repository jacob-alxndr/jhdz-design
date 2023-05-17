import React from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import classNames from "classnames";
import { renderButtons } from "@components/Button/utils";
import Button from "@components/Button";

const GlobalFooter = (props) => {
  const { primaryColumns } = props;
  const renderColumns = () => {
    if (!primaryColumns) return "";
    return primaryColumns?.map((column, index) => {
      const columnTitle = column?.title;
      const links = renderButtons(column?.links, styles.columnLinks);
      return (
        <div
          key={`${columnTitle}${index}`}
          className={classNames(styles.column)}
        >
          {column?.description && (
            <div className={styles.description}>
              <p>{column?.description}</p>
            </div>
          )}
          {links}
        </div>
      );
    });
  };

  return (
    <footer className={classNames(styles.container, "padding-x-sm")}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Button
            data={{
              buttonUrl: "/",
              buttonType: "internal",
            }}
            classes={styles.logo}
          ></Button>
          <div className={styles.rule}></div>
        </div>
        <div className={styles.grid}>{renderColumns()}</div>
        <div className={styles.legal}>
          &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
