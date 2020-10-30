import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Game } from '../../interfaces/interfaces';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = []

  constructor( private gameService: GameService) { }

  ngOnInit(): void {

      this.gameService.getNominados()
          .subscribe( resp => {
            console.log(resp)
            this.juegos = resp
          } )
  }

  votar( juego: Game){

    this.gameService.votarJuego( juego.id )
        .subscribe( (resp: {ok: boolean, mensaje: string }) => {

          if ( resp.ok ) {
            Swal.fire(
              '¡Has Votado!', resp.mensaje, 'success'
            )
          } else {
            Swal.fire(
              'Ooopss', resp.mensaje, 'error'
            )
          }
    })

  }

}
