import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemon1: PokemonResponse | undefined;
  pokemon2: PokemonResponse | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((pokemon) => {
      this.pokemon1 = pokemon;
    });
    
    this.pokemonService.getPokemon(2).subscribe((pokemon) => {
      this.pokemon2 = pokemon;
    });
  }

}
