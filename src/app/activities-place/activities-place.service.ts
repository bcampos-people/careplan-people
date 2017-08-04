import {Injectable} from '@angular/core';
import {Activities} from './activities';

let activities:Activities[] = [
    {
        id: 1,
        status: 'done ok',
        type: 'Fonoaudiologia',
        title: 'Fazer Exercício respiratório',
        description: 'Lorem ipsum consectetur adipiscing elit. Nulla pellentesque scelerisque egestas. Cras non accumsan nisl.',
        videoYoutubeId: 'e6bHAb0jpVI',
        note: '<strong>MENSAGEM A VOCÊ:</strong> "Nulla pellentesque scelerisque egestas. Cras non accumsan nisl."',
        message: '',
        comments: ['']
    },
    {
        id: 2,
        status: '',
        type: 'Fonoaudiologia',
        title: 'Andar 10 minutos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque scelerisque egestas. Cras non accumsan nisl. Cras porttitor iaculis lorem, non mattis libero hendrerit sit amet. Nam pharetra dictum mauris, sed consequat augue rhoncus ut. Vivamus sed molestie libero. Aliquam placerat odio libero, sed facilisis neque efficitur ac.',
        videoYoutubeId: 'e6bHAb0jpVI',
        note: '<strong>MENSAGEM A VOCÊ:</strong> "Nulla pellentesque scelerisque egestas. Cras non accumsan nisl."',
        message: '',
        comments: ['']
    },
    {
        id: 3,
        status: '',
        type: 'Fonoaudiologia',
        title: 'Bombear a panturrilha',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque scelerisque egestas. Cras non accumsan nisl. Cras porttitor iaculis lorem, non mattis libero hendrerit sit amet. Nam pharetra dictum mauris, sed consequat augue rhoncus ut. Vivamus sed molestie libero. Aliquam placerat odio libero, sed facilisis neque efficitur ac.',
        videoYoutubeId: '',
        note: '',
        message: '',
        comments: ['']
    },
    {
        id: 4,
        status: '',
        type: 'Fonoaudiologia',
        title: 'Mover a perna pra cima e pra baixo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque scelerisque egestas. Cras non accumsan nisl. Cras porttitor iaculis lorem, non mattis libero hendrerit sit amet. Nam pharetra dictum mauris, sed consequat augue rhoncus ut. Vivamus sed molestie libero. Aliquam placerat odio libero, sed facilisis neque efficitur ac.',
        videoYoutubeId: '',
        note: '<strong>MENSAGEM A VOCÊ:</strong> "Nulla pellentesque scelerisque egestas. Cras non accumsan nisl."',
        message: '',
        comments: ['']
    },
    {
        id: 5,
        status: 'done wrong',
        type: 'Fonoaudiologia',
        title: 'Beber 2 litros de água',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque scelerisque egestas. Cras non accumsan nisl. Cras porttitor iaculis lorem, non mattis libero hendrerit sit amet. Nam pharetra dictum mauris, sed consequat augue rhoncus ut. Vivamus sed molestie libero. Aliquam placerat odio libero, sed facilisis neque efficitur ac.',
        videoYoutubeId: 'e6bHAb0jpVI',
        note: '',
        message: '',
        comments: ['Tarefa não executada.']
    },
    {
        id: 6,
        status: '',
        type: 'Fonoaudiologia',
        title: 'Respirar devagar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque scelerisque egestas. Cras non accumsan nisl. Cras porttitor iaculis lorem, non mattis libero hendrerit sit amet. Nam pharetra dictum mauris, sed consequat augue rhoncus ut. Vivamus sed molestie libero. Aliquam placerat odio libero, sed facilisis neque efficitur ac.',
        videoYoutubeId: 'e6bHAb0jpVI',
        note: '<strong>MENSAGEM A VOCÊ:</strong> "Nulla pellentesque scelerisque egestas. Cras non accumsan nisl."',
        message: 'Concentre-se bem, você consegue.',
        comments: ['']
    },
];

@Injectable()
export class ActivitiesPlaceService {

    constructor() {
    }

    getActivitiesPlace() {
        return activities;
    }

}
