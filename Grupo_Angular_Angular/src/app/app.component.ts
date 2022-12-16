import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  result!: string;
  pista!:string;
  pointsUser = 0;
  pointsComp =  0;
  imagen_izq = "../assets/img/closed1.png";
  imagen_der = "../assets/img/closed2.png";
  mano_llave_user =''
  mano_llave_ia =''
  

  constructor(private playGame: GameService) {}

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }
  
  play(choice: string): void {
    const result = this.playGame.game(choice, this.mano_llave_ia);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
    this.imagen_izq = result.img_izq;
    this.imagen_der = result.img_der;
    setTimeout(()=>{this.imagen_izq = "../assets/img/closed1.png"; this.imagen_der = "../assets/img/closed2.png"; }, 1000)
    this.mano_llave_ia='';
    this.pista = '';
  }
  borrar():void{
    this.result = 'Esperando jugada...';
    this.pointsUser = 0;
    this.pointsComp = 0;
    this.imagen_izq = "../assets/img/closed1.png";
    this.imagen_der = "../assets/img/closed2.png";
    this.pista = '';
  }
  pista_funcion(): void{
    this.pista = 'Esperando Pista...';
    const mano_random = Math.floor(Math.random() * 2);

    if(mano_random==1){
      setTimeout(()=>{this.pista = 'Llave en la izq'}, 1000)
      this.mano_llave_ia='L'
    }else{
      setTimeout(()=>{this.pista = 'Llave en la der'}, 1000)
      this.mano_llave_ia='R'
    }
  }

}