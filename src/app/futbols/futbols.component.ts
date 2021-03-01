import { Component, OnInit } from '@angular/core';
import { jugadores } from "../futbol";
import { FutbolService} from "../futbol.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-futbols',
  templateUrl: './futbols.component.html',
  styleUrls: ['./futbols.component.css']
})
export class FutbolsComponent implements OnInit {
  futbols: jugadores[];
  futbolsApi = null;
  futbolTmp: any;
  constructor(
    private futbolService: FutbolService,
    private messageService: MessageService
  ) { }

 getFutbolsApi() {
    this.messageService.add("Hola en getFutbolsApi")
    this.futbolService.getFutbolsApi().subscribe(futbols => {
      this.futbolsApi = futbols;
      this.futbols = this.futbolsApi;
    });
  }

delete(futbol: jugadores): void {
    
    this.futbols = this.futbols.filter(f => f !== futbol);
    this.futbolService.deletejugadores(futbol).subscribe();
  }

add(idP: string, nombreP: string, salarioP: string, equipoP: string): void {
    const idV = parseInt(idP);
    const nombreV = nombreP.trim();
    const salarioV = parseInt(salarioP);
    const equipoV = parseInt(equipoP);
    if (!idP) {
      return;
    }
    const newDoc: any = {
      id: idV,
      nombre: nombreV,
      salario: salarioV,
      equipo: equipoV
    };
    this.futbolService.addjugadores(newDoc)
    .subscribe(futbol => {
      this.futbolTmp = futbol;
      this.futbols.push(this.futbolTmp);
    });
  }


  ngOnInit() {
    this.getFutbolsApi();
  }

}