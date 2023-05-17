import HeroFields from "../fragments/hero";
import DemoSectionFields from "../fragments/demoSection";
import CardListFields from "operations/fragments/cardList";
import GlobalNavigationFields from "operations/fragments/globalNavigation";
const GET_HOME = `
query HomeQuery {
  home {
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  
      ... on CardListRecord {
        ...CardListFields
      }  
  
    }
    hero {
      ...HeroFields
    }
  }
  globalNavigation {
    ${GlobalNavigationFields}
  }

}
${HeroFields}
${DemoSectionFields}
${CardListFields}
`;

export default GET_HOME;
