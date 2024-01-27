/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/components/PreviewToolbar/index.module.scss";
import { getKey } from "./utils";

/**
 * Toolbar that displays when site is using preview content from DatoCMS
 */
const PreviewToolbar = ({ preview }) => {
  const { asPath, locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en" } = useRouter();
  const router = useRouter();
  const [expanded, setExpanded] = useState(true);
  const [copiedActive, setCopiedActive] = useState(false);
  const [secret, setSecret] = useState();

  const copyLink = () => {
    const dummy = document.createElement("input");
    // const localePrefix = locale === "en" ? "" : `/${locale}`;
    // const text = `${window.location.host}/api/preview-start?redirect=${localePrefix}${asPath}&secret=${secret}`;
    const text = `${window.location.host}/api/preview-start?redirect=${asPath}&secret=${secret}`;
    dummy.value = text;
    document.body.appendChild(dummy);
    dummy.select();
    navigator.clipboard.writeText(text);
    document.body.removeChild(dummy);
    setCopiedActive(true);
    setTimeout(() => {
      setCopiedActive(false);
    }, 1000);
  };

  const getPreviewLink = async () => {
    const response = await getKey();
    setSecret(response?.secret);
  };

  useEffect(() => {
    getPreviewLink();
  }, []);

  return (
    <div
      className={clsx(styles.container, {
        [styles["is-active"]]: preview,
        [styles["is-collapsed"]]: !expanded,
      })}
      data-scroll
      data-scroll-sticky
    >
      {preview && (
        <>
          <button
            className={styles.logo}
            onClick={() => {
              setExpanded(true);
            }}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUwMTMgMEgwVjI1SDEyLjUwMTNDMTguNzUzMyAyNSAyNSAxOS40MDQ4IDI1IDEyLjUwMjZDMjUgNS42MDA0NiAxOC43NTMzIDAgMTIuNTAxMyAwWk0xMi41MDEzIDE4LjE3OTJDMTEuMzcxMSAxOC4xNzc2IDEwLjI2NjcgMTcuODQzMiA5LjMyNzY4IDE3LjIxODFDOC4zODg3MSAxNi41OTMgNy42NTczNCAxNS43MDUzIDcuMjI2MDIgMTQuNjY3M0M2Ljc5NDY5IDEzLjYyOTMgNi42ODI3OSAxMi40ODc1IDYuOTA0NDQgMTEuMzg2M0M3LjEyNjA5IDEwLjI4NTEgNy42NzEzNiA5LjI3Mzg2IDguNDcxMyA4LjQ4MDVDOS4yNzEyNSA3LjY4NzE0IDEwLjI5IDcuMTQ3MjQgMTEuMzk4NyA2LjkyOTA0QzEyLjUwNzQgNi43MTA4NCAxMy42NTYzIDYuODI0MTQgMTQuNzAwMiA3LjI1NDYyQzE1Ljc0NDIgNy42ODUxIDE2LjYzNjIgOC40MTM0MyAxNy4yNjM2IDkuMzQ3NTRDMTcuODkxIDEwLjI4MTcgMTguMjI1NiAxMS4zNzk2IDE4LjIyNSAxMi41MDI2QzE4LjIyNSAxMy4yNDkgMTguMDc2OSAxMy45ODggMTcuNzg5MSAxNC42Nzc0QzE3LjUwMTQgMTUuMzY2OCAxNy4wNzk2IDE1Ljk5MyAxNi41NDggMTYuNTIwM0MxNi4wMTYzIDE3LjA0NzUgMTUuMzg1MyAxNy40NjU1IDE0LjY5MDkgMTcuNzUwMUMxMy45OTY1IDE4LjAzNDggMTMuMjUyNSAxOC4xODA2IDEyLjUwMTMgMTguMTc5MlYxOC4xNzkyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
              alt="Close"
            />
          </button>
          {expanded && (
            <>
              <span className={styles.title}>Preview Mode</span>

              <div className={styles.actions}>
                <button onClick={copyLink} className={styles.button}>
                  <span
                    className={clsx(styles.message, {
                      [styles.active]: !copiedActive,
                    })}
                  >
                    Copy Link
                  </span>
                  <span
                    className={clsx(styles.overlay, {
                      [styles.active]: copiedActive,
                    })}
                  >
                    Copy Link Active
                  </span>
                </button>
                <a href={`/api/preview-end?redirect=${asPath}`} className={styles.button}>
                  End Preview
                </a>
              </div>

              <button
                onClick={() => {
                  setExpanded(false);
                }}
                className={styles.close}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMSAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjMxMzY3IDkuMjQzMDJDOC43MDQxOSA5LjYzMzU0IDkuMzM3MzYgOS42MzM1NCA5LjcyNzg4IDkuMjQzMDJDMTAuMTE4NCA4Ljg1MjQ5IDEwLjExODQgOC4yMTkzMyA5LjcyNzg4IDcuODI4OEw2Ljg5OTQ1IDUuMDAwMzhMOS43Mjc4OCAyLjE3MTk1QzEwLjExODQgMS43ODE0MyAxMC4xMTg0IDEuMTQ4MjYgOS43Mjc4OCAwLjc1NzczN0M5LjMzNzM2IDAuMzY3MjEzIDguNzA0MTkgMC4zNjcyMTIgOC4zMTM2NyAwLjc1NzczN0w1LjQ4NTI0IDMuNTg2MTZMMi42NTY4MSAwLjc1NzczN0MyLjI2NjI5IDAuMzY3MjEyIDEuNjMzMTIgMC4zNjcyMTMgMS4yNDI2IDAuNzU3NzM3QzAuODUyMDc2IDEuMTQ4MjYgMC44NTIwNzYgMS43ODE0MyAxLjI0MjYgMi4xNzE5NUw0LjA3MTAzIDUuMDAwMzhMMS4yNDI2IDcuODI4OEMwLjg1MjA3NiA4LjIxOTMzIDAuODUyMDc2IDguODUyNDkgMS4yNDI2IDkuMjQzMDJDMS42MzMxMiA5LjYzMzU0IDIuMjY2MjkgOS42MzM1NCAyLjY1NjgxIDkuMjQzMDJMNS40ODUyNCA2LjQxNDU5TDguMzEzNjcgOS4yNDMwMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                  alt="Close"
                />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

PreviewToolbar.propTypes = {
  /**
   * Has the user activated preview mode
   */
  preview: PropTypes.bool,
};

export default PreviewToolbar;
