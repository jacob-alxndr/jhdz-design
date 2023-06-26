// import { useStore } from "@lib/store";
import clsx from "clsx";
import styles from "@styles/Hero/index.module.scss";
import mapping from "./mapping";
import { useState } from "react";
import { StructuredText } from "react-datocms";
import { useStore } from "@lib/store";
import { Image } from "react-datocms";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
const Hero = (props) => {
  const [data, setData] = useState(props);
  const { title, subtitle, description, image, buttons, titleSize, subtitleSize, componentPadding } =
    data;

  return (
    <div className={clsx(styles.container, "padding-x-sm", ...(componentPadding && componentPadding))}>
      <div className={clsx(styles.content, styles.heading)}>
        <div className={clsx(styles.title, `u-heading--${titleSize}`)}>{title}</div>
        <div className={clsx(`u-subheading--${subtitleSize}`)}>{subtitle}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.description}>
            <StructuredText data={description} />
          </div>
          {buttons && <div className={styles.buttonList}>{renderButtons(buttons, styles.buttons)}</div>}
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
