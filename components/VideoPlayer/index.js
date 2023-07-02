import React, { useEffect, useState } from "react";
import styles from "@styles/VideoPlayer/index.module.scss";
import { StructuredText } from "react-datocms";
import clsx from "clsx";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useStore } from "@lib/store";
const VideoPlayer = (props) => {
  const { url, componentPadding, caption } = props;
  const isTouch = useStore(({ isTouch }) => isTouch);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    isTouch ? setIsMobile(false) : setIsMobile(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);
  return (
    <div className={clsx(styles.container, `padding-x-sm`, ...(componentPadding && componentPadding))}>
      {url && (
        <ReactPlayer
          url={url}
          loop
          playsinline
          // playing={isMobile}
          muted
          style={{ width: "100%" }}
        />
      )}

      {/* {caption && (
        <div className={styles.caption}>
          <StructuredText data={caption} />
        </div>
      )} */}
    </div>
  );
};
export default VideoPlayer;
