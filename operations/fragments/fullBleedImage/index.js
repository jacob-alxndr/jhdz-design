import ImageFields from "operations/imports/media/image";
const FullBleedImageFields = `
fragment FullBleedImageFields on FullBleedImageRecord {
    _modelApiKey
    image {
      ... on ImageRecord { 
       ${ImageFields}
      } 
    }
    verticalPaddingTop
    verticalPaddingBottom
    verticalPaddingTopMobile
    verticalPaddingBottomMobile
 

}  
`;

export default FullBleedImageFields;
