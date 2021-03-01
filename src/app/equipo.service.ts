import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { equipos } from "./equipo";

@Injectable({
  providedIn: "root"
})
export class EquipoService {
  //private urlAPI = "http://localhost:3000/equipos";

  // Está subida a heroku:
  private urlAPI = "https://restapiftubol.herokuapp.com/equipos";
  
  
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getEquiposApi() {
    this.messageService.add("Cargamos los documentos");
    return this.http.get(this.urlAPI);
  }

 
  updateequipos(doc: any) {
    console.log("en update");
    console.log(doc);
    const urlId = `${this.urlAPI}/${doc.id}`;
    return this.http.put(urlId, doc);
  }

  
  deleteequipos(equipo: equipos) {
    const urlId = `${this.urlAPI}/${equipo.id}`;
    return this.http.delete(urlId);
  }
  addequipos(doc: any) {
    return this.http.post(this.urlAPI, doc);
  }

  getequipos(id: number) {
    const url = `${this.urlAPI}/${id}`;
    return this.http.get(url);
  }
}