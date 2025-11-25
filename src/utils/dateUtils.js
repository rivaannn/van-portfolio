export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCopyrightText = (name = "M Rivan Sahronie") => {
  return `© ${getCurrentYear()} ${name}`;
};
