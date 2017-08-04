import {Component, OnInit} from '@angular/core';
import { Notices } from './notices';

@Component({
    selector: 'app-alerts-scope',
    templateUrl: './alerts-scope.component.html',
    styleUrls: ['./alerts-scope.component.css']
})
export class AlertsScopeComponent implements OnInit {

    notices: Notices[];
    noticesCount: number;
    safety: string[];
    allergies: string[];
    infos: string[];

    constructor() {
    }

    ngOnInit() {
        this.notices   = [
            { id: 1, type: 'Fisioterapia', messages: [
                'Apertar a esfera de plástico 80 vezes com cada mão',
                'Fazer exercício respiratório',
                'Fazer bombeamento com a panturrilha'
            ] },
            { id: 2, type: 'Enfermagem', messages: [
                'Higienizar a ferida com água e sabão',
                '30 minutos de nebulização',
                'Fazer curativo na escara'
            ] }
        ];

        this.safety    = [ 'Risco de queda ao transitar sozinho', 'Isolamento', 'Só pode sair do leito acompanhado' ];
        this.allergies = [ 'Sulfa', 'Iodo' ];
        this.infos     = [ 'Não permita que nenhum profissional de saúde toque em você antes de higienizar as mãos', 'Todo profissional deve checar seu nome completo' ];

        this.setNoticesCount();
    }

    setNoticesCount() {
        this.noticesCount = this.notices.reduce( ( prev, current ) => {
            return prev + current.messages.length;
        }, 0 );
    }
}
