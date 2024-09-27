var Car = /** @class */ (function () {
    function Car(marque, modele, année) {
        this.marque = marque;
        this.modele = modele;
        this.année = année;
    }
    Car.prototype.demarrer = function () {
        console.log('la voiture a démarrée !');
    };
    return Car;
}());
var MaVoiture = new Car('toyota', 'corolla', 2020);
MaVoiture.demarrer();
