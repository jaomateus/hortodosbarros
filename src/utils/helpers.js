export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
  return newNumber;
};
