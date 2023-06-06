// import { useStore } from "@lib/store";
import classNames from "classnames";

import styles from "@styles/Hero/index.module.scss";
import mapping from "./mapping";
import { useEffect, useState, useLayoutEffect } from "react";
import { StructuredText } from "react-datocms";
import { useStore } from "@lib/store";
import { Image } from "react-datocms";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
const Hero = (props) => {
  const [data, setData] = useState(props);
  const lenis = useStore(({ lenis }) => lenis);
  const {
    title,
    subtitle,
    description,
    image,
    buttons,
    titleSize,
    subtitleSize,
    verticalPaddingTop,
    verticalPaddingBottom,
    verticalPaddingTopMobile,
    verticalPaddingBottomMobile,
  } = data;
  // useEffect(() => {
  //   if (lenis) {
  //     lenis.on("scroll", (e) => {
  //       console.log(e.targetScroll);
  //     });
  //   }
  // });

  return (
    <div
      className={classNames(
        styles.container,
        "padding-x-sm",
        `u-vertical-padding--top-${verticalPaddingTop}`,
        `u-vertical-padding--bottom-${verticalPaddingBottom}`,
        `u-vertical-padding--top-${verticalPaddingTopMobile}-mobile`,
        `u-vertical-padding--bottom-${verticalPaddingBottomMobile}-mobile`
      )}
    >
      <div className={classNames(styles.content, styles.heading)}>
        <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
          {title}
        </div>
        <div className={classNames(`u-subheading--${subtitleSize}`)}>
          {subtitle}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          {" "}
          <div className={styles.description}>
            <StructuredText data={description} />
          </div>
          {buttons && (
            <div className={styles.buttonList}>
              {renderButtons(buttons, styles.buttons)}
            </div>
          )}
        </div>

        {image &&
          image.map((img) => (
            <div className={styles.image} key={img?.id}>
              <Image
                alt={title}
                fadeInDuration={2000}
                lazyLoad={true}
                priority={true}
                data={img?.image?.responsiveImage}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;
