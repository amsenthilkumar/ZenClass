class Player{
    name;
    score:number=0;
    age;
    numberofoverattended;
    currentover;
    thisover=[];

    hit(){
        let run=Math.floor(Math.random()*6);
        this.score=this.score+run;
        this.thisover.push(run);

       }

}
class Team{
    playersList:Array<Player> = [];
    teamscore;

    constructor(){
        for(let i=1;i<=12;i++){
            this.playersList.push(new Player())
        }
    }
}
class Game{
    teamList:Array<Team> = [];
    currentplayingTeam;

    constructor(){
        for(let i=1;i<=2;i++){
            this.teamList;
        }
    }

    getTeamList(){
        return this.teamList;
    }

}
let createGame = ()=> {
    let game1= new Game();
    console.log(game1.getTeamList())
}


}










this.currentPlayingTeam = this.teamList[Math.floor(Math.random)]






myGame=new Game();
myGame.getTeamList();
}

let startGame = () 




myGame.setCurrentPlayingTeam();
myGame.current