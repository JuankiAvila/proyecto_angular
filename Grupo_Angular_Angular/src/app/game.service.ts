import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
  private getComputerChoice(): string {
    const choices = ['R', 'L']; 
    const randomChoice = Math.floor(Math.random() * 2);
    return choices[randomChoice];
  }

  game(
    userChoice: string,mano_ia: string
  ): {
    message: string;
    userAdd: number;
    compAdd: number;
    img_izq:string;
    img_der:string;
  } {
    if(mano_ia==''){
      mano_ia=this.getComputerChoice();
    }
    const playUserComp = userChoice + mano_ia;
    let playStatus: {
      message: string;
      userAdd: number;
      compAdd: number;
      img_izq:string;
      img_der:string;
    };
    switch (playUserComp) {
      // Gana la maquina
      case 'RL':
        playStatus = {
          message: 'Gana la maquina :(',
          userAdd: 0,
          compAdd: 1,
          img_izq:"../assets/img/key.jpg",
          img_der:"../assets/img/right.png",
        };
        break;
      case 'LR':
        playStatus = {
          message: 'Gana la maquina :(',
          userAdd: 0,
          compAdd: 1,
          img_izq:"../assets/img/left.png",
          img_der:"../assets/img/key.jpg",
        };
        break;
      // Gana el player
      case 'RR':
        playStatus = {
          message: '¡¡Has ganado!!',
          userAdd: 1,
          compAdd: 0,
          img_izq:"../assets/img/left.png",
          img_der:"../assets/img/key.jpg",
        };
        break;
      case 'LL':
        playStatus = {
          message: '¡¡Has ganado!!',
          userAdd: 1,
          compAdd: 0,
          img_izq:"../assets/img/key.jpg",
          img_der:"../assets/img/right.png",
        };
        break;
    }
    return playStatus!;
  }
}
