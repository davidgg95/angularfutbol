import { Component, OnInit } from '@angular/core';
import { equipos } from "../equipo";
import { EquipoService } from "../equipo.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {
  equipo: equipos;

  constructor(
    private equipoService: EquipoService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getequipos();
  }

  save(salarioP: string, titulosP: string, f_clubP: string): void {
    const doc = {
      id: this.equipo.id,
      nombre: this.equipo.nombre,
      salario: parseInt(salarioP),
      titulos: new Boolean(titulosP),
      f_club: new Date(f_clubP)   
    }; 
    this.equipoService
      .updateequipos(doc)
      .subscribe(() => this.goBack());
  }

  getequipos(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.messageService.add(`EquiposComponent: Selected equipo id=${id}`);
    this.equipoService.getequipos(id)
    .subscribe(
      equipo => {
      const equipoTmp: any = equipo;
      this.equipo = equipoTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }

}