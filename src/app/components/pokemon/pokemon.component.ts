import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  life: number = 100;
  @Output() onAttackDone = new EventEmitter<number>();
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  getProgressBarColor(): string {
    if (this.life >= 60) {
      return 'success';
    } else if (this.life >= 30) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  doAttack() {
    var damage = Math.floor(Math.random() * (30 -10) + 10);
    this.onAttackDone.emit(damage);
  }

}
