import { Component, OnInit } from '@angular/core';
import { jugadores } from "../futbol";
import { FutbolService } from "../futbol.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-futbol-detail',
  templateUrl: './futbol-detail.component.html',
  styleUrls: ['./futbol-detail.component.css']
})
export class FutbolDetailComponent implements OnInit {
  futbol: jugadores;

  constructor(
    private futbolService: FutbolService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getjugadores();
  }

  save(salarioP: string, equipoP: string): void {
    const doc = {
      id: this.futbol.id,
      nombre: this.futbol.nombre,
      salario: parseInt(salarioP),
      equipo: parseInt(equipoP)

    };
    this.futbolService
      .updatejugadores(doc)
      .subscribe(() => this.goBack());
  }

getjugadores(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.messageService.add(`FutbolsComponent: Selected futbol id=${id}`);
    this.futbolService.getjugadores(id)
    .subscribe(
      futbol => {
      const futbolTmp: any = futbol;
      this.futbol = futbolTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }
}