import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent {
  pokemonTurn = 1;
  pokemonPlayer1Id = 55;
  pokemonPlayer2Id = 24;
  applyDamage(damage: number) {
    if(this.pokemonTurn === 1) {
      //Aply damage to pokemon 2
      this.pokemonTurn = 2;
    } else {
      //Aply damage too pokemon 1
      this.pokemonTurn = 1;
    }
  }

}
