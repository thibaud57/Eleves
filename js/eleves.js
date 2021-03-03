export class eleves {
    constructor(eleves) {
        this._eleves = eleves;
    }

    get eleves() {
        return this._eleves;
    }

    set eleves(eleve) {
        this._eleves = eleve;
    }

getMoyenne() {
        let eleves = this.eleves;
        for (let i=0; i<eleves.length; i++) {
            eleves[i].moyenne.push({'fr': this.calculate(eleves[i].fr)})
            eleves[i].moyenne.push({'eng': this.calculate(eleves[i].eng)})
            eleves[i].moyenne.push({'math': this.calculate(eleves[i].math)})
            eleves[i].moyenne.push({'svt': this.calculate(eleves[i].svt)})
            if (eleves[i].serie === 'S') {
                eleves[i].moyenne.push({'general': this.calculateAll(eleves[i].moyenne, 'S')})
            }
            if (eleves[i].serie === 'L') {
                eleves[i].moyenne.push({'general': this.calculateAll(eleves[i].moyenne, 'L')})
            }
        }
    }

     calculate(matiere){
        let total = 0;
        for(let i=0; i<matiere.length; i++){
            total = total + matiere[i] ;
        }
        return Math.round(total / matiere.length * 100) / 100;
    }

     calculateAll(matieres, serie){
        let total = 0;
        if(serie === 'S'){
            total = matieres[0].fr + matieres[1].eng + matieres[2].math + matieres[2].math + matieres[3].svt + matieres[3].svt;
        }
        if (serie === 'L'){
            total = matieres[0].fr + matieres[0].fr + matieres[1].eng + matieres[1].eng + matieres[2].math + matieres[3].svt;
        }
        return Math.round(total / 6 * 100) / 100;
    }

}