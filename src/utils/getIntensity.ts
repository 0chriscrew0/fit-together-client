const getIntensity = (num: number): string => {
  switch (num) {
    case 0:
      return "Light";
    case 1:
      return "Moderate";
    case 2:
      return "Intense";
    case 3:
      return "Very Intense";
    case 4:
      return "Impossible";
    default:
      return "";
  }
};

export default getIntensity;
