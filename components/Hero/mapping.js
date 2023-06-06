import getButtons from "@components/UtilityComponents/Button/mapping";

const mapping = (data) => {
  if (!data) return "";
  const buttons = data?.buttons && getButtons(data?.buttons);

  return {
    ...data,
    buttons,
  };
};

export default mapping;
