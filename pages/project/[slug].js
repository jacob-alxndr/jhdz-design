import dynamic from "next/dynamic";
import GET_LANDING_PAGE from "operations/queries/getLandingPages";
import GET_ALL_LANDING_PAGES from "operations/queries/getAllLandingPages";
import { request } from "@lib/datocms";
import { getAllSlugs } from "@lib/data";
import Layout from "core/Layout";
import { motion as m } from "framer-motion";

const components = {
  text_intro: {
    comp: dynamic(() => import("@components/TextIntro")),
    mapping: require(`@components/TextIntro/mapping`),
  },
  full_bleed_image: {
    comp: dynamic(() => import("@components/FullBleedImage")),
    mapping: require(`@components/FullBleedImage/mapping`),
  },
};

export default function LandingPage({ data }) {
  const {
    page: {
      0: { textIntro, components: bodyComponents },
    },
    // _site,
    globalNavigation,
    globalFooter,
  } = data;
  console.log("Landing Data", data);
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
      <Layout
        components={components}
        navigationData={globalNavigation}
        globalFooterData={globalFooter}
        data={[textIntro, ...bodyComponents]}
      />
    </m.div>
  );
}

export async function getStaticPaths() {
  const data = await request({
    query: GET_ALL_LANDING_PAGES,
  });
  console.log("getStaticPaths", data);
  const paths = getAllSlugs(data?.pages);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("CONTEXT", GET_LANDING_PAGE);
  const slug = context.params.slug;
  const data = await request({
    query: GET_LANDING_PAGE,
    variables: { limit: 10, slug },
    includeDrafts: context.preview,
    preview: context.preview,
  });
  console.log("data", data);
  return {
    props: { data },
  };
}
