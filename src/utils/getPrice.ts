const getPrice = (num: number): string => {
  switch (num) {
    case 1:
      return "$";
    case 2:
      return "$$";
    case 3:
      return "$$$";
    case 4:
      return "$$$$";
    default:
      return "$?";
  }
};

export default getPrice;
