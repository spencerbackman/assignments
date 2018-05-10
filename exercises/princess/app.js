options = ['Powered up', "big", "small", "dead"]

class Player{
    constructor(name, totalCoins, status, isStar, setName, gotHit, gotPowerup, gameActive){
        this.name = name;
        this.totalCoins = totalCoins;
        this.options = status;
        this.isStar = isStar;
        this.setName = setName;
        this.gotHit = gotHit;
        this.gotPowerup = gotPowerup;
        this.gameActive = gameActive;
    }
}