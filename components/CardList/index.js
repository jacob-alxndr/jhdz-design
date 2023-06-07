import classNames from "classnames";
import styles from "../../styles/components/CardList/index.module.scss";
import CardPreview from "@components/CardPreview";

export default function CardList(props) {
  const { eyebrow, title, cards, titleSize, componentPadding, classes, id } = props;
  return (
    <div
      id={id}
      className={classNames(
        styles.container,
        "padding-x-sm",
        ...(componentPadding && componentPadding),
        classes
      )}
    >
      <div className={styles.heading}>
        {eyebrow && <span>{eyebrow}</span>}
        {title && <div className={classNames(styles.title, `u-heading--${titleSize}`)}>{title}</div>}
      </div>

      {cards && (
        <div className={styles.content}>
          {cards?.map((c, i) => (
            <CardPreview data={c} key={c?.id || i} />
          ))}
        </div>
      )}
    </div>
  );
}
