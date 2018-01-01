
(function(){

var myApp = angular.module('footBall', ['ngRoute']);
//declare the controller function

let mainController = function($http){
//declare the context
	const main = this;

	this.data2015;
	this.data2016;
	this.teamStats2015 = [];
	this.teamStats2016 = [];
	this.teamArray = [];
	this.matches = [];
	this.matchInfo;
	this.statSelection;

this.teamArrayCreator = function(data){
	if(main.teamArray.length === 0){
		main.teamArray.push(data.rounds[0].matches[0].team1.name);
	}
		data.rounds.forEach(function(element){
			for(let i in element.matches){
				let isHere =true;
					for(let j = 0; j < main.teamArray.length; j++){
						if(main.teamArray[j] === element.matches[i].team1.name ){
							isHere = true;
							j = main.teamArray.length;
						}
						else if(main.teamArray[j] != element.matches[i].team1.name){
							isHere = false;
						}
					}// end of for loop
					
				if(isHere === false){
					main.teamArray.push(element.matches[i].team1.name);
				}
			}
		});
	// console.log(main.teamArray);	
}

this.teamStatCreator = function(data, pushArray,){
	main.teamArrayCreator(data);
	main.teamArray.forEach(function(team){
		let totalPlayed = 0;
		let totalWon = 0;
		let totalLost = 0;
		let totalDraw = 0;
		let goalsFor = 0;
		let goalsAgainst = 0;
		let goalDiff = 0;
		let totalPoints = 0;

		data.rounds.forEach(function(element){

			element.matches.forEach(function(match){
				if(match.team1.name === team && match.score1 != null){
					totalPlayed += 1;
					goalsFor += match.score1;
					goalsAgainst += match.score2;
					goalDiff = goalsFor - goalsAgainst;
					if(match.score1 > match.score2){
						totalWon += 1;
						totalPoints += 3;
					}
					if(match.score1 < match.score2){
						totalLost += 1;
					}
					if(match.score1 === match.score2)
					{
						totalDraw += 1;
						totalPoints += 1;
					}
				}
				if(match.team2.name === team && match.score1 != null){
					totalPlayed += 1;
					goalsFor += match.score2;
					goalsAgainst += match.score1;
					goalDiff = goalsFor - goalsAgainst;
					if(match.score1 < match.score2){
						totalWon += 1;
						totalPoints += 3;
					}
					if(match.score1 > match.score2){
						totalLost += 1;
					}
					if(match.score1 === match.score2)
					{
						totalDraw += 1;
						totalPoints += 1;
					}
				}
			});//end of element.matches forEach loop.
		});//end of data.rounds forEach loop.

		if(totalPlayed != 0){
			pushArray.push({
				teamName : team, 
				totalWon : totalWon, 
				totalLost : totalLost, 
				totalDraw : totalDraw, 
				totalPlayed : totalPlayed, 
				goalsFor : goalsFor,
				goalsAgainst : goalsAgainst,
				goalDiff : goalDiff,
				totalPoints : totalPoints
			});
		}	
	})//end of teamArray forEach loop.
	console.log(pushArray);
}// end of teamStatCreator function.
	
	this.get2015Data = function(){
		$http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json")
			.then(function(response){
				data2015 = response.data;
				// console.log(data2015);
				for(let i in data2015.rounds){
					for (let j in data2015.rounds[i].matches){
						main.matches.push(data2015.rounds[i].matches[j]);
					}
				}
				main.teamStatCreator(data2015, main.teamStats2015);
		});
	}

	this.get2016Data = function(){
		$http.get("https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json")
			.then(function(response){
				data2016 = response.data;
				// console.log(data2016);
				for(let i in data2016.rounds){
					for (let j in data2016.rounds[i].matches){
						main.matches.push(data2016.rounds[i].matches[j]);
					}
				}
				main.insertID();
				main.teamStatCreator(data2016, main.teamStats2016);
			});
	}

	this.getdata = function(){
		main.get2015Data();
		main.get2016Data();

		// console.log(main.matches);
	}

	this.insertID = function(){
		let numins = 0
		for(let i in main.matches){
			main.matches[i].id = numins;
			numins++;
		}
	}

	this.teamSummary = function(key){
		for(let i = 0; i < main.matches.length; i++){
			if(main.matches[i].id === key){
				main.matchInfo = main.matches[i];
			}
		}
	}

	this.Year;
	this.searchTeam;
	this.searchTerm;

	this.reset = function(){
		main.Year = "";
		main.searchTeam = "";
		main.searchTerm = "";
	}
}
//invoke the controller function.
myApp.controller('mainController', ['$http', mainController]);

}())
