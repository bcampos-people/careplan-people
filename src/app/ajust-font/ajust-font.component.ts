import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ajust-font',
    templateUrl: './ajust-font.component.html',
    styleUrls: ['./ajust-font.component.css']
})
export class AjustFontComponent implements OnInit {

    private maxZoom:number = 1.2;
    private minZoom:number = 0.8;

    constructor() {
    }

    ngOnInit() {
    }

    increaseFontSize() {
        let zoom = this.getBodyZoom() + 0.1;

        if ( zoom > this.maxZoom ) {
            return;
        }

        this.setBodyZoom( zoom );
    }

    decreaseFontSize() {
        let zoom = this.getBodyZoom() - 0.1;

        if ( zoom < this.minZoom ) {
            return;
        }

        this.setBodyZoom( zoom );
    }

    getBodyZoom() : number {
        return ( parseFloat( document.body.style.zoom ) || 1 );
    }

    setBodyZoom( zoom:number ) {
        document.body.style.zoom = zoom + '';
    }
}
