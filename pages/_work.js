// // Imports
// import dynamic from "next/dynamic";
// import { useState } from "react";
// import Layout from "core/Layout";
// import GET_PAGINATED_LANDING_PAGES from "operations/queries/getPaginatedLandingPages";
// import PageTransition from "core/PageTransition";
// import { gqlStaticPropsWithSubscription } from "../lib/datocms";
// import { useQuerySubscription, request } from "react-datocms";
// import { useQuery } from "react-query";
// import { GraphQLClient } from "graphql-request";
// import datocmsConfig from "@config/datocms";
// import Link from "next/link";
// import { useStore } from "@lib/store";

// export const useGQLQuery = (key, query, variables) => {
//   const endpoint = `https://graphql.datocms.com/`;
//   //  const endpoint = `https://graphql.datocms.com${preview ? "/preview" : "/"}`;
//   const headers = {
//     authorization: `Bearer ${datocmsConfig.token}`,
//   };
//   const client = new GraphQLClient(endpoint, {
//     headers,
//   });

//   return useQuery(key, () => client.request(query, variables), { keepPreviousData: true }); // useQuery from react-query
// };

// // Variables
// const components = {
//   global_navigation: {
//     comp: dynamic(() => import("@components/Global/GlobalNavigation")),
//     mapping: require("@components/Global/GlobalNavigation/mapping"),
//   },
//   global_drawer: {
//     comp: dynamic(() => import("@components/Global/GlobalDrawer")),
//     mapping: require("@components/Global/GlobalDrawer/mapping"),
//   },

//   card_list: {
//     comp: dynamic(() => import("@components/CardList")),
//     mapping: require(`@components/CardList/mapping`),
//   },
//   global_footer: {
//     comp: dynamic(() => import("../components/Global/GlobalFooter")),
//     mapping: require("../components/Global/GlobalFooter/mapping"),
//   },
// };

// // Page Component
// export default function Work(props) {
//   const {
//     data: {
//       //   pages,
//       // _site,
//       //   globalNavigation,
//       globalDrawer,
//       //   globalFooter,
//     },
//   } = useQuerySubscription(props.subscription);

//   const loadedWorkPages = useStore(({ loadedWorkPages }) => loadedWorkPages);
//   const setLoadedWorkPages = useStore((state) => state.setLoadedWorkPages);

//   // let [first, addWork] = useState(loadedWorkPages);
//   const { data, status } = useGQLQuery(
//     ["allLandingPages", { first: loadedWorkPages }],
//     GET_PAGINATED_LANDING_PAGES,
//     {
//       first: loadedWorkPages,
//     }
//   );

//   const loadMore = () => {
//     setLoadedWorkPages(loadedWorkPages + 2);
//   };
//   // const runStatus = () => {
//   //   switch (status) {
//   //     case "loading":
//   //       return <div>Loading…</div>;
//   //       break;
//   //     case "error":
//   //       return <div>Something went wrong…</div>;
//   //       break;
//   //     case "success":
//   //       return (
//   //         <div>
//   //           {data.pages.map((p, i) => {
//   //             return (
//   //               <div key={i}>
//   //                 <Link href={`/project/${p.slug}`}>{p.title}</Link>
//   //               </div>
//   //             );
//   //           })}
//   //         </div>
//   //       );
//   //       break;
//   //   }
//   // };

//   return (
//     <PageTransition>
//       <Layout
//         components={components}
//         // navigationData={globalNavigation}
//         drawerData={globalDrawer}
//         // footerData={globalFooter}
//         //   data={[...bodyComponents]}
//         // preview={preview}
//       >
//         <div className="work" key="work-page">
//           {/* {runStatus()} */}
//           {status === "loading" && <div>Loading…</div>}
//           {status === "error" && <div>Something went wrong…</div>}
//           {status === "success" && (
//             <div>
//               {data.pages.map((p, i) => {
//                 return (
//                   <div key={i}>
//                     <Link href={`/project/${p.slug}`}>{p.title}</Link>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//           <button
//             className=".btn"
//             onClick={loadMore}
//             // Disable the Load Project button if you add one to currently loaded pages and it is higher than the meta count
//             disabled={loadedWorkPages + 1 > data?.meta?.count}
//           >
//             <span>Load More</span>
//           </button>
//         </div>
//       </Layout>
//     </PageTransition>
//   );
// }

// // Server: Static Props
// export const getStaticProps = gqlStaticPropsWithSubscription(GET_PAGINATED_LANDING_PAGES, {
//   revalidate: 10,
//   paginatedQuery: {
//     requiredKeys: ["page"],
//   },
//   //   requiredKeys: ["page"],
// });
