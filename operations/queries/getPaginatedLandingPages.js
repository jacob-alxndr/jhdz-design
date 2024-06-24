import GlobalDrawerFields from "operations/fragments/drawer";
const GET_PAGINATED_LANDING_PAGES = `
query AllLandingPagesQuery($first: IntType, $skip: IntType) {
    pages: allLandingPages(
        first: $first,
        skip: $skip,
        ) {
            slug
            title
            textIntro {
              title
              subtitle
              description {
                value
                links
                blocks {
                  title
                  items {
                    title
                  }
                }
              }
            }
            components {
                ... on FullBleedImageRecord {
                  id
                  image {
                    image {
                      responsiveImage {
                        src
                      }
                    }
                  }
                }
              }
          }
        
        meta: _allLandingPagesMeta {
            count
        }
        globalDrawer {${GlobalDrawerFields}} 
}
`;

export default GET_PAGINATED_LANDING_PAGES;
