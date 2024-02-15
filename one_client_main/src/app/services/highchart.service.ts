import * as Highcharts from 'highcharts';
//import * as Highcharts from 'highcharts/highstock';
import { Injectable } from '@angular/core';
import HExporting from 'highcharts/modules/exporting';
import HFullScreen from "highcharts/modules/full-screen";
import HExportData from "highcharts/modules/export-data";
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

import funnel from 'highcharts/modules/funnel';


funnel(Highcharts);


@Injectable({
  providedIn: 'root'
})
export class HighchartService {

  constructor() { }

  createChart(el: any, cfg: any) {
    Highcharts.chart(el, cfg);
    HExporting(Highcharts);
    HExportData(Highcharts);
    HFullScreen(Highcharts);
  }
}
