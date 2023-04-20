export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const capilizeFirstLetter = (data: string): string => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};
