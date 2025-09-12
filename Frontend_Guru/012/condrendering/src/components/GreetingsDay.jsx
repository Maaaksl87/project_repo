function GreetingsDay() {
  const hours = new Date().getHours();
  let message;

  switch (true) {
    case hours >= 6 && hours < 12:
      message = "Доброго ранку";
      break;
    case hours >= 12 && hours < 18:
      message = "Доброго дня";
      break;
    case hours >= 18 && hours < 24:
      message = "Добрий вечір";
      break;
    case hours >= 0 && hours < 6:
      message = "Добраніч";
      break;
    default:
      message = "Привіт :)";
  }

  return <h2>{message}</h2>;
}

export default GreetingsDay;
