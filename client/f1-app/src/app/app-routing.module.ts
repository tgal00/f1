import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RasporedUtrkaComponent } from './components/raspored-utrka/raspored-utrka.component';
import { PoredakVozacaComponent } from './components/poredak-vozaca/poredak-vozaca.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForumComponent } from './components/forum/forum.component';
import { PoredakKonstruktoraComponent } from './components/poredak-konstruktora/poredak-konstruktora.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: "/raspored-utrka", pathMatch: "full" },
  { path: 'raspored-utrka', component: RasporedUtrkaComponent },
  { path: 'poredak-vozaca', component: PoredakVozacaComponent },
  { path: 'poredak-konstruktora', component: PoredakKonstruktoraComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
