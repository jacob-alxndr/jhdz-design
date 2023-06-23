import TextIntroFields from "operations/fragments/textIntro";
import FullBleedImageFields from "operations/fragments/fullBleedImage";
import PromoFields from "operations/fragments/promo";
import MediaPromoFields from "operations/fragments/mediaPromo";
import ImageFields from "operations/imports/media/image";
import GlobalDrawerFields from "operations/fragments/drawer";
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
            ... on PromoRecord {
                ...PromoFields
            }
            ... on MediaPromoRecord {
                ...MediaPromoFields
            }
        
          }
    }   
    globalDrawer {${GlobalDrawerFields}} 
}
${TextIntroFields}
${FullBleedImageFields}
${PromoFields}
${MediaPromoFields}


`;
export default GET_LANDING_PAGE;
