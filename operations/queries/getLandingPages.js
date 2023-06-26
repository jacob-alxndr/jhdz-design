import TextIntroFields from "operations/fragments/textIntro";
import FullBleedImageFields from "operations/fragments/fullBleedImage";
import TextPromoFields from "operations/fragments/textPromo";
import MediaPromoFields from "operations/fragments/mediaPromo";
import ImageFields from "operations/imports/media/image";
import GlobalDrawerFields from "operations/fragments/drawer";
import LandingPageFooterFields from "operations/fragments/landingPageFooter";
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
            ... on TextPromoRecord {
                ...TextPromoFields
            }
            ... on MediaPromoRecord {
                ...MediaPromoFields
            }
          }
          landingPageFooter{ ${LandingPageFooterFields}}
    }   
    globalDrawer {${GlobalDrawerFields}} 
    
}
${TextIntroFields}
${FullBleedImageFields}
${TextPromoFields}
${MediaPromoFields}




`;
export default GET_LANDING_PAGE;
