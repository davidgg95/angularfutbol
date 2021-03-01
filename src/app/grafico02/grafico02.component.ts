import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { EquipoService} from "../equipo.service";

@Component({
  selector: 'app-grafico02',
  templateUrl: './grafico02.component.html',
  styleUrls: ['./grafico02.component.css']
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Porcentaje de los presupuestos de clubes"
    },
    
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    
    
    
    xAxis: {
      accessibility: {},
      title: {
        text: "Salario"
      }
    },
    series: [
      {
        name: "Presupuesto",
        type: "pie",
        data: []
      }
    ],

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      backgroundColor: "#FF10"
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
        Highcharts.chart("miGrafico02", this.chartOptions);
      },
      error => console.log(error)
    );
  }


}