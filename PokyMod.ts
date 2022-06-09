import promptSync from 'prompt-sync';
const prompt: any = promptSync();

let userLife: number = 50
let cpuLife: number = 50
let round: number = 1

let choiceUser: string;

const attack: string[] = [
    "Charge (0)",
    "Soin (1)",
    "Aqua-jet (2)",
    "Draco-rage (3)"
]

while (userLife > 0 && cpuLife > 0) {
    if (round % 2 == 0) {
        let randomCpu: number = aleatoire(0, 3);
        switch (randomCpu) {
            case (0):
                console.log("Le Cpu utilise Charge");
                attackCpu(10, 1, "USER est a : ")
                break;
            case (1):
                console.log("Le Cpu utilise Soin");
                soinCpuUser(cpuLife,"CPU est a : ")
                break;
            case (2):
                console.log("Le Cpu utilise Aqua-jet");
                attackCpu(20, 2, "USER est a : ")
                break;
            case (3):
                console.log("Le Cpu utilise Draco-rage");
                attackCpu(50, 3, "USER est a : ")
                break;

            default:
                break;
        }
    } else {
        console.log("Charge (0) - Soin (1) - Aqua-jet (2) - Draco-rage (3)");

        choiceUser = prompt("Utilisateur : ")

        switch (choiceUser) {
            case ("0"):
                attackUser(10, 1, "le CPU est a : ")
                break;
            case ("1"):
                soinCpuUser(userLife,"USER est a : ")
                break;
            case ("2"):
                attackUser(20, 2, "le CPU est a : ")
                break;
            case ("3"):
                attackUser(50, 3, "le CPU est a : ")
                break;
            case ("q"):
                console.log("a bientot");
                break;

            default:
                break;
        }
    }

    round++


}

////////////////////////////////////////////////

function attackUser(attackDamage: number, chance: number, userPasInper: string) {

    let random: number = aleatoire(0, chance);
    if (random == 0) {
        cpuLife = cpuLife - attackDamage
        console.log("Votre attaque est réussi");
        console.log("Cpu est a : " + cpuLife);
        if (cpuLife == 0) {
            console.log("Vous avez gagné");
        } else if (userLife == 0) {
            console.log("Vous avez perdu");
        }
    } else {
        console.log("Votre attaque a échoué");
    }

}
function attackCpu(attackDamage: number, chance: number, cpuPasInper: string) {
    let random: number = aleatoire(0, chance);
    if (random == 0) {
        userLife = userLife - attackDamage
        console.log("L'attaque est réussi");
        console.log(cpuPasInper + userLife);
        if (cpuLife == 0) {
            console.log("Vous avez gagné");
        } else if (userLife == 0) {
            console.log("Vous avez perdu");
        }
    } else {
        console.log("L'attaque a échoué");
    }
}
function soinCpuUser(gLife: number, soinName: string ) {
    let random: number = aleatoire(0,1);
    if (random == 0) {
        gLife = gLife + 10
        console.log("L'attaque est réussi");
        console.log(soinName + gLife);
    } else {
        console.log("L'attaque a échoué");
    }
}
function aleatoire(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
}








