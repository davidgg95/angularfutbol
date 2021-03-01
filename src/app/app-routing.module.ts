import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FutbolsComponent } from './futbols/futbols.component';
import { EquiposComponent } from './equipos/equipos.component';
import { Grafico01Component } from "./grafico01/grafico01.component";
import { Grafico02Component } from "./grafico02/grafico02.component";
import { Grafico03Component } from "./grafico03/grafico03.component";
import { FutbolDetailComponent } from "./futbol-detail/futbol-detail.component";
import { EquipoDetailComponent } from "./equipo-detail/equipo-detail.component";


const routes: Routes = [
  { path: "jugadores", component: FutbolsComponent },
  { path: "equipos", component: EquiposComponent },
  { path: "grafico", component: Grafico01Component },
  { path: "grafico2", component: Grafico02Component },
  { path: "grafico3", component: Grafico03Component },
  { path: "detalles/:id", component: FutbolDetailComponent },
  { path: "detalles2/:id", component: EquipoDetailComponent },
  { path: "", redirectTo: "futbols", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}