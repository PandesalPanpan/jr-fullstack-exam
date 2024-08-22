export const validatePrice = (price) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(price);
  };