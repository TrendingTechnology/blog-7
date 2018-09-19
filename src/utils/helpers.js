/**
 * Returns age by birthdate
 *
 * @param dateString - birthdate in '11.04.1997' format
 * @return Number - years old
 */

export const getAge = (dateString) => {
  const day = parseInt(dateString.substring(0, 2), 10);
  const month = parseInt(dateString.substring(3, 5), 10);
  const year = parseInt(dateString.substring(6, 10), 10);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
};

export default {
  getAge,
};
