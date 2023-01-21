banknotesArray = [ 25, 50, 100];
function  isPossibleToGiveChange(banknotesArray){
  let ticket = 0;
  for (i = 0; i < banknotesArray.length; i++){
        banknotesArray[i] == 25 ? ticket += 25 : ticket -= banknotesArray[i] - 25;
}
    if (ticket < 25){
    console.log("False");
  } else {
    console.log("true");
  }
}
isPossibleToGiveChange("rez");