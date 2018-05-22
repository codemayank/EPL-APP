export class MatchService {
  matches = [
    {
      id: 1,
      dateOfPlay: "2015-08-08",
      team1: "Manchester United",
      team2: "tottenham"
    },
    {
      id: 2,
      dateOfPlay: "2015-08-08",
      team1: "bournemouth",
      team2: "astonvilla"
    }
  ];
  addMatch(id: number, dateOfPlay: string, team1: string, team2: string) {
    this.matches.push({
      id: id,
      dateOfPlay: dateOfPlay,
      team1: team1,
      team2: team2
    });
  }
  getMatch(index: number) {
    //TODO: change the parameter from index to unique parameter that match has when
    //match data is received from the api.
    let match = this.matches.find(s => {
      return s.id == index;
    });

    return match;
  }
  updateMatch(
    id: number,
    matchInfo: { id: number; dateOfPlay: string; team1: string; team2: string }
  ) {
    console.log(id, matchInfo);
    let index = this.matches.findIndex(x => x.id == id);
    if (id > -1) {
      this.matches[index].dateOfPlay = matchInfo.dateOfPlay;
      this.matches[index].team1 = matchInfo.team1;
      this.matches[index].team2 = matchInfo.team2;
    }
  }
}
