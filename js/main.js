import {eleves} from './eleves.js';

let elevesArray = [
        {
            firstName: 'Daniel',
            lastName: 'Girard',
            fr: [10, 15, 19],
            eng: [7, 6, 9],
            math: [19, 1, 8, 7],
            svt: [14, 12, 11],
            moyenne: [],
            serie: 'S'
        }, {
            firstName: 'Jean',
            lastName: 'Dupont',
            fr: [8, 6, 14],
            eng: [5, 15, 19],
            math: [7, 15, 19, 18],
            svt: [12, 13, 14],
            moyenne: [],
            serie: 'S'
        }, {
            firstName: 'Lois',
            lastName: 'Blair',
            fr: [7, 6, 9],
            eng: [10, 15, 19],
            math: [14, 12, 11],
            svt: [10, 15, 19],
            moyenne: [],
            serie: 'S'
        }, {
            firstName: 'Jules',
            lastName: 'Verne',
            fr: [10, 15, 19],
            eng: [14, 12, 11],
            math: [8, 6, 14],
            svt: [10, 15, 19],
            moyenne: [],
            serie: 'L'
        }, {
            firstName: 'Jean',
            lastName: 'Jacques',
            fr: [8, 6, 14],
            eng: [10, 15, 19],
            math: [10, 15, 19, 12],
            svt: [14, 12, 11],
            moyenne: [],
            serie: 'L'
        }
    ];

let _eleves = new eleves(elevesArray);
_eleves.getMoyenne();

let tableContainer = document.querySelector(".table-container")


for (let i=0; i<_eleves.eleves.length; i++) {
    tableContainer.innerHTML += `
                    <tr>
                        <td id="firstName">${_eleves.eleves[i].firstName}</td>
                        <td id="lastName">${_eleves.eleves[i].lastName}</td>
                        <td id="fr">${_eleves.eleves[i].moyenne[0].fr}</td>
                        <td id="eng">${_eleves.eleves[i].moyenne[1].eng}</td>
                        <td id="math">${_eleves.eleves[i].moyenne[2].math}</td>
                        <td id="svt">${_eleves.eleves[i].moyenne[3].svt}</td>
                        <td id="general">${_eleves.eleves[i].moyenne[4].general}</td>
                    </tr>
            `
            }