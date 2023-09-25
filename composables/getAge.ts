export const useGetAge = () => {
  const difference = new Date().getTime() - new Date(2000, 9, 25).getTime();
  return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
};
