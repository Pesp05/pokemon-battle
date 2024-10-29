import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';

const routes: Routes = [{path: 'battle', component: PokemonBattleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
