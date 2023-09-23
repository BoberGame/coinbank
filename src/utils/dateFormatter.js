const userLanguage = navigator.language || navigator.userLanguage;

const dateFormatter = new Intl.DateTimeFormat(userLanguage, {
  hour: '2-digit',
  minute: '2-digit',
  hour12: undefined,
});

export default dateFormatter;
