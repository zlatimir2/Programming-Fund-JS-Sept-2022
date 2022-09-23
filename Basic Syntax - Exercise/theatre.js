function ticket(dayType, age) {
  let ticketPrice = 0;
  switch (dayType) {
    case 'Weekday':
      if (age >= 0 && age <= 18) {
        ticketPrice = 12;
      } else if (18 < age && age <= 64) {
        ticketPrice = 18;
      } else if (65 < age && age <= 122) {
        ticketPrice = 12;
      }
      break;
    case 'Weekend':
      if (age >= 0 && age <= 18) {
        ticketPrice = 15;
      } else if (18 < age && age <= 64) {
        ticketPrice = 20;
      } else if (65 < age && age <= 122) {
        ticketPrice = 15;
      }
      break;
    case 'Holiday':
      if (age >= 0 && age <= 18) {
        ticketPrice = 5;
      } else if (18 < age && age <= 64) {
        ticketPrice = 12;
      } else if (65 < age && age <= 122) {
        ticketPrice = 10;
      }

      break;


  }
  if (age < 0 || age > 122) {
    console.log("Error!");
  } else {
    console.log(ticketPrice + "$");
  }
}
