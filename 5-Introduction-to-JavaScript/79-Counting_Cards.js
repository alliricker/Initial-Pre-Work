// In this example, parameters were set for the cards with a positive count change to return a "Bet" statement. If not, a "Hold" statement.

var count = 0;
function cc(card){
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count --;
  break;
}
if (count > 0){
  return count  + " Bet";
} else {
  return count + " Hold";
}
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
