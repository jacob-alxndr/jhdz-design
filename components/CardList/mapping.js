// // import mediaMapping from '../Utilities/Media/mapping';

// const getBackgroundImages = (backgrounds) =>
//   backgrounds?.map((background) => {
//     const url = background?.backgroundImage?.responsiveImage?.src;
//     const positionX = background?.horizontalAlignment;
//     const positionY = background?.verticalAlignment;
//     const repeat = background?.repeat ? "repeat" : "no-repeat";
//     const width = background?.backgroundImage?.width;
//     const height = background?.backgroundImage?.height;

//     const mobileBkg = background?.mobileBackgroundImage;

//     return {
//       url,
//       positionX,
//       positionY,
//       repeat,
//       width,
//       height,
//       mobile: {
//         url: mobileBkg?.responsiveImage?.src || url,
//         width: mobileBkg?.width || width,
//         height: mobileBkg?.height || height,
//         positionX: mobileBkg
//           ? background?.mobileHorizontalAlignment
//           : positionX,
//         positionY: mobileBkg ? background?.mobileVerticalAlignment : positionY,
//       },
//     };
//   });

// const mapping = (data) => {
//   if (!data) return "";

//   const backgroundImageRoot = data?.backgroundMedia?.[0];
//   const backgroundImage = backgroundImageRoot?.backgroundImage?.url;

//   const backgroundImages =
//     data?.backgroundMedia && getBackgroundImages(data?.backgroundMedia);

//   return {
//     ...data,
//     backgroundImages,
//     backgroundImage,
//   };
// };

// export default mapping;
import getButtons from "../UtilityComponents/Button/mapping";
import { getComponentPadding } from "@utils/helpers";
const getCardButtons = (cards) => {
  const cardsWithButtons = cards.map((c) => {
    const buttons = c?.buttons && getButtons(c?.buttons);
    return { ...c, buttons };
  });
  return cardsWithButtons;
};

const mapping = (data) => {
  if (!data) return "";

  const cards = getCardButtons(data?.cards);

  return {
    ...data,
    cards,
    componentPadding: getComponentPadding(data),
  };
};

export default mapping;
