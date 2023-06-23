import { forwardRef } from "react";
import clsx from "clsx";
import styles from "@styles/GlobalDrawer/index.module.scss";
import Button from "@components/UtilityComponents/Button";
import { IconClose } from "@components/UtilityComponents/Icons";

const DrawerBody = forwardRef(({ ariaLabel, children, onClose, drawerClass }, ref) => {
  const handleClose = () => {
    onClose(ref);
  };

  return (
    <div
      className={clsx("Drawer", styles.drawer, drawerClass, "Drawer--is-showing", styles["is-showing"])}
      ref={ref}
      aria-label={ariaLabel}
    >
      <div className={styles.header}>
        <Button
          data={{
            buttonType: "no-action",
            aria: {
              label: "close",
            },
          }}
          classes={clsx("drawer__header__close-button", styles.close)}
          // clean
          onClick={handleClose}
        >
          <IconClose classes={clsx("c-button__label", styles.iconClose)} />
        </Button>
      </div>
      <div className={styles.content}>
        <div className={clsx(styles.body__content)} data-lenis-prevent>
          {children}
        </div>
      </div>
      <div className={clsx("u-heading--h3", styles.drawerFooter)}>
        &copy; {process.env.NEXT_PUBLIC_SITE_NAME} {new Date().getFullYear()}
      </div>
      <div className={styles.background} />
    </div>
  );
});

DrawerBody.displayName = "Drawer Body";

export default DrawerBody;
