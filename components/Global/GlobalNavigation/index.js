/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../../UtilityComponents/Button";
import styles from "@styles/GlobalNavigation/index.module.scss";
import clsx from "clsx";
import { useStore } from "@lib/store";
import { IconAbout, IconLogo } from "@components/UtilityComponents/Icons";

const GlobalNavigation = (props) => {
  const { classes } = props;
  const navigationData = useStore(({ navigationData }) => navigationData);
  const drawerData = useStore(({ drawerData }) => drawerData);
  return (
    <header className={clsx(styles.header, classes, "padding-x-sm")}>
      <nav className={clsx(styles.nav)}>
        <div className={clsx(styles.navContent)}>
          <Button
            data={{
              buttonUrl: "/",
              buttonType: "internal",
            }}
            classes={clsx(styles.iconLogo)}
          >
            <IconLogo />
          </Button>
          <Button
            data={{
              buttonType: "content-drawer",
              drawer: drawerData,
              openInDrawer: true,
            }}
            classes={clsx(styles.iconAbout)}
          >
            <IconAbout />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default GlobalNavigation;
