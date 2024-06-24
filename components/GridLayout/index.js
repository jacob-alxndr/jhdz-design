/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/components/Grid/index.module.scss";
import clsx from "clsx";
import { ComponentLoader } from "core/ComponentLoader";

const components = {
  full_bleed_image: {
    comp: dynamic(() => import("@components/FullBleedImage")),
    mapping: require(`@components/FullBleedImage/mapping`),
  },
};

export default function GridLayout(props) {
  const { components: models, grid } = props;
  const gridEl = useRef();

  function setGridStyles(grid) {
    const gridNode = gridEl.current;
    gridNode.style.setProperty("--gc-col-count", grid.columns);
    gridNode.style.setProperty("--gc-grid-column-gap", `${grid.columnGap}px`);
    gridNode.style.setProperty("--gc-grid-row-gap", `${grid.rowGap}px`);
  }
  useEffect(() => {
    setGridStyles(grid);
  }, [props]);

  return (
    <div className={clsx("padding-x-md", styles.gridContainer)} ref={gridEl}>
      {/* {JSON.stringify(props.compo)} */}
      <ComponentLoader
        key={"ComponentLoader"}
        models={models}
        components={components}
        // context={{
        //   ...context, // If you have data that needs to be shared with all components, provide a value to the context prop. The prop will be passed to each component.
        // }}
      />
    </div>
  );
}
