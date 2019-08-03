const getIntensityColor = (num: number): string => {
  switch (num) {
    case 0:
      return "info";
    case 1:
      return "primary";
    case 2:
      return "warning";
    case 3:
      return "success";
    case 4:
      return "danger";
    default:
      return "";
  }
};

export default getIntensityColor;
