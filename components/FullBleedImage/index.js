import React from "react";
import styles from "@styles/FullBleedImage/index.module.scss";
import { Image } from "react-datocms";
import classNames from "classnames";

const FullBleedImage = (props) => {
  const {
    index,
    image,
    verticalPaddingBottom,
    verticalPaddingBottomMobile,
    verticalPaddingTop,
    verticalPaddingTopMobile,
  } = props;

  return (
    <div
      className={classNames(
        styles.container,
        `padding-x-sm`,
        `u-vertical-padding--top-${verticalPaddingTop}`,
        `u-vertical-padding--bottom-${verticalPaddingBottom}`,
        {
          [`u-vertical-padding--top-${verticalPaddingTopMobile}-mobile`]:
            verticalPaddingTopMobile,
        },
        {
          [`u-vertical-padding--bottom-${verticalPaddingBottomMobile}-mobile`]:
            verticalPaddingBottomMobile,
        }
      )}
    >
      <div className={styles.image__wrapper}>
        {image &&
          image.map((img) => (
            <div className={styles.image} key={img?.id}>
              <Image
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
export default FullBleedImage;
