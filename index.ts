
interface vehicule{
    marque : string;
    modele : string;
    année : number;
    demarrer() : void;
}

class Car implements vehicule {

    marque: string; 
    modele: string;
    année: number;

    constructor(marque:string, modele:string, année:number) {
        this.marque = marque ;
        this.modele = modele ;
        this.année = année ;
    }
    demarrer(): void {
        console.log('la voiture a démarrée !')
    }
}

const MaVoiture = new Car('toyota', 'corolla', 2020);

MaVoiture.demarrer()
