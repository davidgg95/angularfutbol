import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { EquipoService} from "../equipo.service";

@Component({
  selector: 'app-grafico03',
  templateUrl: './grafico03.component.html',
  styleUrls: ['./grafico03.component.css']
})
export class Grafico03Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Gráfico de líneas"
    },
    yAxis: {
      accessibility: {},
      title: {
        text: "Presupuesto"
      }
    },
    colors: ["#FF0400"],
    xAxis: {
      accessibility: {},
      title: {
        text: "Clubes"
      }
    },
    series: [
      {
        type: "area",
        data: [],
        name: "Presupuesto",
        lineColor: "#FF0400"
      }
    ],

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      backgroundColor: "#FF04"
    }
  };



  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.getMisDatos()
  }

  getMisDatos() {
    this.equipoService.getEquiposApi()
    .subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.salario);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico03", this.chartOptions);
      },
      error => console.log(error)
    );
  }

}