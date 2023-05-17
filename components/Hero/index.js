// import { useStore } from "@lib/store";
import classNames from "classnames";
// import propTypes from "prop-types";
// import { useEffect, useMemo, useRef, useState } from "react";
// import { useIntersection } from "react-use";
import styles from "@styles/Hero/index.module.scss";
import mapping from "./mapping";
import { useEffect, useState } from "react";
import { StructuredText } from "react-datocms";
const Hero = (props) => {
  const [data, setData] = useState(props);
  const {
    // index,
    eyebrow,
    title,
    subtitle,
    description,
    titleSize,
    backgroundColor,
    backgroundImage,
    backgroundMedia,
  } = data;
  // console.log("hero props", props);

  // const hasInit = useStore(({ hasInit }) => hasInit);
  // const setHasInit = useStore((state) => state.setHasInit);
  // const setNavTheme = useStore((state) => state.setNavTheme);
  // const _thresholds = useStore(({ thresholds }) => thresholds);
  // const thresholds = useMemo(() => {
  //   const sortedThresholds = Object.values(_thresholds).sort((a, b) => a - b);
  //   return sortedThresholds;
  // }, [_thresholds]);

  // const el = useRef();
  // const content = useRef();
  // const scrollText = useRef();
  // const debug = useDebug();
  // const intersection = useIntersection(scrollText, {
  //   threshold: 1,
  // });

  // useEffect(() => {
  //   if (intersection?.isIntersecting) {
  //     setNavTheme('dark');
  //   } else {
  //     setNavTheme('light');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [intersection]);
  // useEffect(() => {
  //   console.log("UE props:", props);
  // }, [props]);

  // const onMouseMove = ({ clientX, clientY }) => {
  //   const {
  //     current: { last, current, ease },
  //   } = state;
  //   current.x =
  //     (clientX / state.current.ww - 0.5) * state.current.xThreshold * -1;
  //   current.y =
  //     (clientY / state.current.wh - 0.5) * state.current.yThreshold * -1;
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(true);
  //     // state.current.flags.hasAnimated = true;
  //   }, 500);
  // if (hasInit) {
  //   animateIn(TRANSITION_DURATION);
  // }
  // window.addEventListener('mousemove', onMouseMove, false);
  // Emitter.on('ready', () => {
  //   setHasInit(true);
  //   animateIn(state.current.animationDelay);
  // });

  // return () => {
  //   window.removeEventListener('mousemove', onMouseMove, false);
  //   Emitter.off('ready', animateIn);
  //   setNavTheme('light');
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useLayoutEffect(() => {
  //   state.current.ww = window.innerWidth;
  //   state.current.wh = window.innerHeight;
  // }, []);

  // useScroll(({ scroll }) => {
  //   state.current.scroll = scroll;
  // });

  // const animateIn = (delay = 0) => {
  //   // timeline
  //   setTimeout(() => {
  //     setVisible(true);
  //     state.current.flags.hasAnimated = true;
  //   }, delay);
  // };

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.header, "padding-x-lg")}>
        <div className={styles.content}>
          <div className={classNames(styles.eyebrow)}>{eyebrow}</div>
          <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
            {title}
          </div>
          <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
            {subtitle}
          </div>
          <div className={styles.description}>
            <StructuredText data={description} />
          </div>
        </div>
      </div>

      <div
        className={styles.background}
        style={{
          backgroundColor: `${backgroundColor?.hex}`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: `${backgroundMedia[0]?.horizontalAlignment} ${backgroundMedia[0]?.verticalAlignment}`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
