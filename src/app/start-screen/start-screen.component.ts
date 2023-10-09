import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  game: Game;

  firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {}

  newGame() {
    this.game = new Game();
    addDoc(this.getGameRef(), this.game.toJSON()).then((gameInfo: any) => {
      // console.log('Game id: ' + gameInfo.id);
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
  }

  getGameRef() {
    return collection(this.firestore, 'games');
  }
}

