import FullBleedImageFields from "operations/fragments/fullBleedImage";

const GridLayoutFields = `
fragment GridLayoutFields on GridLayoutRecord {
    _modelApiKey
    grid {
      columns
      columnGap
      rowGap
    }
    components {
      
      ... on FullBleedImageRecord {
          ...FullBleedImageFields
      }
   
    }




}  
`;

export default GridLayoutFields;
