const prompt = require("prompt-sync")();

class Character {
    constructor(name, specialization, hp, speed, mana, str) {
        this.name = name;
        this.specialization = specialization
        this.hp = hp
        this.speed = speed
        this.mana = mana
        this.str = str
    }
    introduce() {
        console.log(`My name is ${this.name} and my class is ${this.specialization}\n`);
    }
    myStats() {
        console.log(`My stats are:\nHp: ${this.hp}\nDmg: ${this.str}\nSpeed: ${this.speed}\n`);
    }
}

class Warrior extends Character {
    constructor(name) {
        super()
        this.name = name;
        this.specialization = "Warrior"
        this.hp = 20
        this.speed = 4
        this.mana = 5
        this.str = 3
        this.armor = 5;
        this.stamina = 2;
    }
}
class Archer extends Character {
    constructor(name) {
        super()
        this.name = name;
        this.specialization = "Archer";
        this.str = 5;
        this.hp = 15;
        this.speed = 6;
        this.mana = 10;
        this.reloadTime = 1;
        this.eagleVision = true;
    }
}
class Mage extends Character {
    constructor(name) {
        super()
        this.name = name;
        this.specialization = "Mage";
        this.str = 4;
        this.hp = 12;
        this.speed = 8;
        this.mana = 20;
        this.chantSpeed = 2;
        this.dualChant = false;
    }
}
function pickSomeoneElse() {
    console.log("Do you want to pick someone else? (Y/N)");
    const choice = prompt();
    if (choice == "Y")
        return false
    return true
}
const Wojownik = new Warrior("Waldek")

let choice
let Player
while (!choice) {
    console.log("Choose ur character\n1. Warrior\n2. Archer\n3. Mage");
    var playerChoice = prompt()
    switch (playerChoice) {
        case "1":
            Player = new Warrior("Mareck")
            break;
        case "2":
            Player = new Archer("Antonio")
            break
        case "3":
            Player = new Mage("HughAnus")
            break
    }
    Player.introduce()
    Player.myStats()
    choice = pickSomeoneElse()
}
choice = false
let Enemy
while (!choice) {
    console.log("Choose ur enemy\n1. Warrior\n2. Archer\n3. Mage");
    var enemyChoice = prompt()
    switch (enemyChoice) {
        case "1":
            Enemy = new Warrior("Norbert")
            break;
        case "2":
            Enemy = new Archer("Bob")
            break
        case "3":
            Enemy = new Mage("PabloTheSecond")
            break
    }
    Enemy.introduce()
    Enemy.myStats()
    choice = pickSomeoneElse()
}
