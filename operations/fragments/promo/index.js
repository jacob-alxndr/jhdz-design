import Buttons from "../../imports/buttons";
// import ImageFields from '../../imports/media/image';
import DescriptionListFields from "../../imports/descriptionList";

const PromoFields = `
fragment PromoFields on PromoRecord {
    _modelApiKey
    title
    titleSize
    alignment
    textBlockWidth
    verticalPaddingBottom
    verticalPaddingTop
    verticalPaddingBottomMobile
    verticalPaddingTopMobile
    content {
        links
        value
    }
    ${Buttons}

}  
`;

export default PromoFields;
