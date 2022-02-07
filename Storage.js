export class Storage
{
    constructor()
    {
        this.nbrAnniv = this.findNbrAnniv();
    }

    findNbrAnniv()
    {
        let nbrAnniv = localstorage.getItem('nbr_anniv');
        if (nbrAnniv) {
            return nbrAnniv;
        }else{
            localStorage.setItem('nbr_Anniv', 0);
            return 0;
        }
    }

    ajoutAnniv(anniv)
    {
        let numAnniv = ++this.nbrAnniv;
        localStorage.setItem('nbr_Anniv', numAnniv);
        localStorage.setItem(numAnniv, JSON.stringify(anniv));
    }

    clearAnniv(){
        localStorage.clear();
        this.nbrAnniv = 0;
    }

    getListeAnniv(){
        let liste = [];
        for (let index = 1; index <= this.nbrAnniv; index++) {
            const anniv = JSON.parse( localStorage.getItem(index));
            liste.push(anniv);         
        }
        return liste;
    }
  
}