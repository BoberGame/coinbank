export const shortenFullName = (fullName) =>
  fullName
    .split(' ')
    .map((word) => word[0])
    .join('');
