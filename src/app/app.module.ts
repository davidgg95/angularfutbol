import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from 'highcharts-angular';

import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { FutbolsComponent } from './futbols/futbols.component';
import { FutbolService } from './futbol.service';
import { EquipoService } from './equipo.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { Grafico01Component } from './grafico01/grafico01.component';
import { FutbolDetailComponent } from './futbol-detail/futbol-detail.component';
import { EquiposComponent } from './equipos/equipos.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';
import { Grafico02Component } from './grafico02/grafico02.component';
import { Grafico03Component } from './grafico03/grafico03.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, HighchartsChartModule ],
  declarations: [ AppComponent, FutbolsComponent, MessagesComponent, Grafico01Component, FutbolDetailComponent, EquiposComponent, EquipoDetailComponent, Grafico02Component, Grafico03Component ],
  bootstrap:    [ AppComponent ],
  providers: [FutbolService, EquipoService, MessageService, {provide: APP_BASE_HREF, useValue: '/futbols'}]
})
export class AppModule { }
