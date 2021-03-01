import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { jugadores } from "./futbol";

@Injectable({
  providedIn: "root"
})
export class FutbolService {
  //private urlAPI = "http://localhost:3000/jugadores";

  // Está subida a heroku:
  private urlAPI = "https://restapiftubol.herokuapp.com/jugadores";
  
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getFutbolsApi() {
    this.messageService.add("Cargamos los documentos");
    return this.http.get(this.urlAPI);
  }

 
  updatejugadores(doc: any) {
    console.log("en update");
    console.log(doc);
    const urlId = `${this.urlAPI}/${doc.id}`;
    return this.http.put(urlId, doc);
  }

  
  deletejugadores(futbol: jugadores) {
    const urlId = `${this.urlAPI}/${futbol.id}`;
    return this.http.delete(urlId);
  }
  addjugadores(doc: any) {
    return this.http.post(this.urlAPI, doc);
  }

  getjugadores(id: number) {
    const url = `${this.urlAPI}/${id}`;
    return this.http.get(url);
  }
}
