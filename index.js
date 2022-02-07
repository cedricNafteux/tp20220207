import { Anniversaire } from './Anniversaire.js';
import {Storage} from "./Storage.js";


let anniv = new Anniversaire('nafteux', 'cedric', '20.05.1980', 'vert');

console.log(anniv);

let store = new Storage();

console.log(store);

store.ajoutAnniv(anniv);
store.ajoutAnniv(anniv);

let listeAnniversaire = store.listeAnniv();
console.log(listeAnniversaire);


store.clearAnniv();



