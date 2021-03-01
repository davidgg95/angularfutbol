import { Component, OnInit } from '@angular/core';
import { equipos } from "../equipo";
import { EquipoService } from "../equipo.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: equipos[];
  equiposApi = null;
  equipoTmp: any;
  constructor(
    private equipoService: EquipoService,
    private messageService: MessageService
  ) { }

  getEquiposApi() {
    this.messageService.add("Hola en getEquiposApi")
    this.equipoService.getEquiposApi().subscribe(equipos => {
      this.equiposApi = equipos;
      this.equipos = this.equiposApi;
    });
  }

  delete(equipo: equipos): void {
    
    this.equipos = this.equipos.filter(e => e !== equipo);
    this.equipoService.deleteequipos(equipo).subscribe();
  }

  add(idP: string, nombreP: string, salarioP: string, titulosP: string, f_clubP: string): void {
    const idV = parseInt(idP);
    const nombreV = nombreP.trim();
    const salarioV = parseInt(salarioP);
    const titulosV = new Boolean(titulosP);
    const f_clubV = new Date(f_clubP);
    if (!idP) {
      return;
    }
    const newDoc: any = {
      id: idV,
      nombre: nombreV,
      salario: salarioV,
      titulos: titulosV,
      f_club: f_clubV 
    };
    this.equipoService.addequipos(newDoc)
    .subscribe(equipo => {
      this.equipoTmp = equipo;
      this.equipos.push(this.equipoTmp);
    });
  }

  ngOnInit() {
    this.getEquiposApi();
  }

}