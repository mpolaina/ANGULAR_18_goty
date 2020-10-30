import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graf-bar-hor',
  templateUrl: './graf-bar-hor.component.html',
  styleUrls: ['./graf-bar-hor.component.css']
})
export class GrafBarHorComponent {

  @Input() results: any[] = []


  // results: any[] = [
  //   { "name": "Juego 1", "value": 20 },
  //   { "name": "Juego 2", "value": 25 },
  //   { "name": "Juego 3", "value": 15 },
  //   { "name": "Juego 4", "value": 30 }
  // ]

  view: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'ocean'

  //intervalo

  constructor() {

    // const newResults = [...this.results]

    //   this.intervalo = setInterval( () => {
    //     console.log('cargando')
    //     for( let i in newResults ){
    //       newResults[i].value = Math.round(Math.random() * 500)
    //     }
    //     this.results = [...newResults]
    //   },1500)
  }

  onSelect(event) {
    console.log(event);
  }

  // ngOnDestroy() {
  //   clearInterval( this.intervalo )
  // }
}
