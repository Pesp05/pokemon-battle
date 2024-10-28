import { Component, Input } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent {
  @Input() pokemon1: PokemonResponse | undefined;
}
