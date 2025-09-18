export const maskCardNumber = (cardNumber: string) => {
  // Remove non-digits just in case
  const digitsOnly = cardNumber.replace(/\D/g, "");
  const last4 = digitsOnly.slice(-4);
  return `•••• •••• •••• ${last4}`;
};
