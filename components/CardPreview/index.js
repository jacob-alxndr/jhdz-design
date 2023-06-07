import { Image } from "react-datocms";
import Link from "next/link";
import styles from "@styles/CardPreview/index.module.scss";
import classNames from "classnames";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
export default function CardPreview({ data }) {
  return (
    <div>
      <Link
        // Link
        // URL Object
        // href={{
        //   pathname: "/project/[slug]",
        //   query: { slug: data?.slug },
        // }}
        // or
        // URL Path
        href={`/project/${data?.slug}`}
      >
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h3 className={classNames(styles.title, "u-heading--h2")}>{data?.title}</h3>
              <span className={classNames(styles.subtitle, "u-heading--sh2")}>{data?.subtitle}</span>
            </div>

            <div className={styles.description}>
              {data?.description}
              {/* <Markdown>{content}</Markdown> */}
            </div>
            {data?.buttons && (
              <div className={classNames(styles.buttons, "js-sub-content")}>
                {renderButtons(data?.buttons)}
              </div>
            )}
            {/* {renderButtons(buttons, styles["card-actions"])} */}
          </div>
          <div className={styles.media}>
            {data?.backgroundMedia?.map((img, i) => (
              <Image
                key={img?.id}
                fadeInDuration={2000}
                lazyLoad={true}
                priority={true}
                data={img?.backgroundImage?.responsiveImage}
                alt={img?.alt}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
