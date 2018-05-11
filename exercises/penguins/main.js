class Penguin {
    constructor(population) {
        this.population = population;
    }
}
class Communists {
    constructor(population) {
        this.population = population;
    }
}

const PenguinPop = new Penguin = {population: 1000000};
const CommunistsPop = new Communists = {population: 1000000};

const coinFlip = () => {
 if(Math.random() > .5) {
     return Penguin
 } else {
     return Communists;
 }
}
const sendNuke = (party, onHit, onMiss) => {
    const pOrC = coinFlip();
    if(pOrC === Penguin) {
        attackPen();
    } else {
        attackCom();
    }
}

