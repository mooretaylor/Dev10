function playAgain() {
    document.getElementById("results").style.display = "none";
    document.getElementById("thisBet").innerText = "";
    document.getElementById("rollCount").innerText = "";
    document.getElementById("moneyMax").innerText = "";
    document.getElementById("rollNum").innerText = "";
    document.getElementById("startBet").readOnly = false;
    document.getElementById("playButton").disabled = false;
    document.getElementById("startBet").value = "";
}

function play() {
    var startBet = document.getElementById("startBet").value;
    if (startBet <= 0 ){
        alert("Starting Bet must be at least $1.00");
        return false;
    } else {
      var rollCount = 0;
      var gameMoney = startBet;
      var moneyTally = [startBet];
      var moneyMax = [startBet];
      var totalTally = [];
      var rollNum = [0];
      while (gameMoney > 0) {
        var die1 = Math.floor( Math.random() * 6 ) +1;
        var die2 = Math.floor( Math.random() * 6 ) +1;
        var diceTotal = die1 + die2;
        rollCount++;
        totalTally.push(diceTotal);
        if (diceTotal == 7) {
            gameMoney += 4;
            moneyTally.push(gameMoney);
            if (gameMoney > moneyMax){
              moneyMax.splice(0,1);
              moneyMax.push(gameMoney);
              rollNum.splice(0,1);
              rollNum.push(rollCount);
            } else {
            }
        }  else {
           gameMoney = gameMoney - 1;
           moneyTally.push(gameMoney);
           }
      }
      alert ("Starting Bet: $" + startBet + "\n" + "\nList of Dice Totals: " + totalTally + "\n" +"\nTally Number: " + totalTally.length + "\n" + "\nTotal Rolls Before Going Broke: " + rollCount + "\n" + "\nMoney Tally: " + moneyTally + "\n" + "\nHighest Amount Won: $" + moneyMax + "\n" + "\nRoll Count at Highest Amount Won: " + rollNum)

      document.getElementById("results").style.display = "";
      document.getElementById("thisBet").innerText = "$" + startBet + ".00";
      document.getElementById("rollCount").innerText = rollCount;
      document.getElementById("moneyMax").innerText = "$" + moneyMax + ".00";
      document.getElementById("rollNum").innerText = rollNum;
      document.getElementById("startBet").readOnly = true;
      document.getElementById("playButton").disabled = true;
      return false;
      }
}
