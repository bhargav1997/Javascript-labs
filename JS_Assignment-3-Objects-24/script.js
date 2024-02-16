let indianCricketTeam = {
    name: "Indian Cricket Team",
    captain: "Kohli",
    coach: "Rahul Dravid",
    totalMatches: 1000,
    totalWorldCups: 2,

    updateIndianCricketTeamCaptain: function(newCaptain) {
      this.captain = newCaptain;
      alert(`Captain updated to ${this.captain}.`);
    }
  };
  
  console.log("Initial Object:", indianCricketTeam);
  
  // Get user input to update total matches
  let newTotalMatches = prompt(`Enter new total matches:`, indianCricketTeam.totalMatches);
  indianCricketTeam.totalMatches = parseInt(newTotalMatches);
  
  // Get user to input to update total World Cups
  let newTotalWorldCups = prompt(`Enter new total World Cups:`, indianCricketTeam.totalWorldCups);
  indianCricketTeam.totalWorldCups = parseInt(newTotalWorldCups);
  
  // Call method to update total matches again
  indianCricketTeam.updateIndianCricketTeamCaptain('Rohit Sharma');
  
  console.log("Updated Object:", indianCricketTeam);