// import { request } from "../lib/datocms";
import GET_HOME from "operations/queries/getHome";
import Layout from "core/Layout";
import dynamic from "next/dynamic";
import PageTransition from "core/PageTransition";
import { gqlStaticPropsWithSubscription } from "../lib/datocms";
import { useQuerySubscription } from "react-datocms";
const components = {
  global_navigation: {
    comp: dynamic(() => import("@components/Global/GlobalNavigation")),
    mapping: require("@components/Global/GlobalNavigation/mapping"),
  },
  global_drawer: {
    comp: dynamic(() => import("@components/Global/GlobalDrawer")),
    mapping: require("@components/Global/GlobalDrawer/mapping"),
  },
  hero: {
    comp: dynamic(() => import("@components/Hero")),
    mapping: require(`@components/Hero/mapping`),
  },
  card_list: {
    comp: dynamic(() => import("@components/CardList")),
    mapping: require(`@components/CardList/mapping`),
  },
  global_footer: {
    comp: dynamic(() => import("../components/Global/GlobalFooter")),
    mapping: require("../components/Global/GlobalFooter/mapping"),
  },
};

export default function Home({ subscription, preview }) {
  const {
    data: {
      home: { hero, components: bodyComponents },
      // _site,
      globalNavigation,
      globalDrawer,
      globalFooter,
    },
  } = useQuerySubscription(subscription);

  return (
    <PageTransition>
      <Layout
        components={components}
        navigationData={globalNavigation}
        drawerData={globalDrawer}
        footerData={globalFooter}
        data={[hero, ...bodyComponents]}
        preview={preview}
      />
    </PageTransition>
  );
}
// export async function getStaticProps(context) {
//   const data = await request({
//     query: GET_HOME,
//     variables: { limit: 10 },
//     includeDrafts: context.preview,
//     preview: context.preview,
//   });
//   return {
//     props: { data },
//   };
// }
export const getStaticProps = gqlStaticPropsWithSubscription(GET_HOME, {
  revalidate: 10,
});
