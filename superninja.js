// parent Ninja class
class Ninja {
    
    constructor(name) {
        this.name = name;
        this.health= 100 ;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`
        name: ${this.name}
        health: ${this.health}
        speed: ${this.speed}
        strength: ${this.strength}`)
    }
    drinkSake() {
        console.log(`${this.health + 10}`);
    }
    parentFunction(){   
        return "This is coming from the parent!";
    }
}

// child Sensei class
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        }
        // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`"What one programmer can do in one month, two programmers can do in two months."`)
    }

    showStats() {
        console.log(`
        name: ${this.name}
        health: ${this.health}
        speed: ${this.speed}
        strength: ${this.strength}
        wisdom: ${this.wisdom}
    `)
    }
    drinkSake(){
        console.log(`${this.health + 10}`);
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.childFunction();
// console.log(speakWisdom);
// console.log(showStats(superSensei));