function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 5)} коров`);
  console.log(`${zeroPad(chickens, 5)} цыплят`);
  console.log(`${zeroPad(pigs, 5)} свиней`);
}

printFarmInventory(7, 16, 3);
