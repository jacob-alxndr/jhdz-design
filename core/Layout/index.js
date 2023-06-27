import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { renderMetaTags } from "react-datocms";
import { ComponentLoader } from "core/ComponentLoader";
import { useStore } from "@lib/store";
import mappingNav from "@components/Global/GlobalNavigation/mapping";
import mappingDrawer from "@components/Global/GlobalDrawer/mapping";
import { motion as m } from "framer-motion";
export default function Layout({
  children,
  navigationData: cmsNavigationData,
  drawerData: cmsDrawerData,
  components,
  data,
  seo,
  siteSeo,
  context,
  preview,
}) {
  const router = useRouter();

  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath.split("?")[0]}`;

  const navigationData = useStore(({ navigationData }) => navigationData);
  const setNavigationData = useStore((state) => state.setNavigationData);
  const drawerData = useStore(({ drawerData }) => drawerData);
  const setDrawerData = useStore((state) => state.setDrawerData);
  // const footerData = useStore(({ footerData }) => footerData);
  // const setFooterData = useStore((state) => state.setFooterData);
  // const setPreview = useStore(({ setPreview }) => setPreview);

  useEffect(() => {
    if (!navigationData) {
      const mapped = mappingNav(cmsNavigationData);
      setNavigationData(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmsNavigationData]);

  useEffect(() => {
    if (!drawerData) {
      const mapped = mappingDrawer(cmsDrawerData);
      setDrawerData(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmsDrawerData]);

  // useEffect(() => {
  //   if (!footerData) {
  //     const mapped = mappingFooter(cmsFooterData);
  //     setFooterData(mapped);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cmsFooterData]);

  // useEffect(() => {
  //   setPreview(preview);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [preview]);

  return (
    <m.div
      // variants={container}
      // initial="hidden"
      // animate="show"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      // exit={{ opacity: 0 }}
      className="layout"
    >
      <Head>
        <title>Jaime Isaac Hernández</title>
        <meta name="description" content="Jaime Isaac Hernández | Digital Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {seo && siteSeo && renderMetaTags([...seo, ...siteSeo.faviconMetaTags])}
        <link rel="icon" href="/favicon.svg" />
        {/* <link rel="canonical" href={canonicalUrl || pageUrl} /> */}
      </Head>
      {/* {children} */}

      <ComponentLoader
        models={data}
        components={components}
        context={{
          ...context, // If you have data that needs to be shared with all components, provide a value to the context prop. The prop will be passed to each component.
        }}
      />
      {children}
    </m.div>
  );
}
