import TextIntroFields from "operations/fragments/textIntro";
import FullBleedImageFields from "operations/fragments/fullBleedImage";
import ImageFields from "operations/imports/media/image";
const GET_LANDING_PAGE = `
query LandingPageQuery($slug: String) {
    page: allLandingPages( filter: {slug: {eq: $slug}}) {
        _modelApiKey
        textIntro {
            ...TextIntroFields
          }
          components {
            ... on FullBleedImageRecord {
                ...FullBleedImageFields
            }
        
          }
    }    
}
${TextIntroFields}
${FullBleedImageFields}


`;
export default GET_LANDING_PAGE;
