import { Component, OnInit } from '@angular/core';
import { HighchartService } from 'src/app/services/highchart.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css']
})
export class UserStatisticsComponent implements OnInit {
  showTotalLeadsGraphLoader: boolean = false;
  showTotalLeadsGraphNoData: boolean = false;

  timelineGraphNoData: boolean = false;
  timelineGraphData: boolean = true;
  timelineGraphLoader: boolean = false

  overViewGraphLoader: boolean = false;
  overViewGraphNoData: boolean = false;


  dateFormat = 'yyyy-MM-dd'
  dateList = [
    {
      displayName: 'Custom',
      code: 'CUSTOM'
    },
    {
      displayName: 'Today',
      code: 'TODAY'
    },
    {
      displayName: 'Yesterday',
      code: 'YESTERDAY'
    },
    {
      displayName: '7D',
      code: '7D'
    },
    {
      displayName: '30D',
      code: '30D'
    },
    {
      displayName: '3M',
      code: '3M'
    },
    {
      displayName: '6M',
      code: '6M'
    },
    {
      displayName: '12M',
      code: '12M'
    },
    {
      displayName: 'All',
      code: 'ALL'
    }
  ]
  selectedDateIndex = this.dateList?.map(x => x.code).indexOf('30D')
  selectedDateString: any;
  selectedDateObject: any;
  constructor(private highchart: HighchartService) { }

  ngOnInit(): void {
    this.getAdminTimelineData();
    this.getRegionWiseOverView();
  }

  /**
 * This method selects when the date is selected
 * @param dateItem selected date item
 * @param index index of menu item
 */
  selectDate(dateItem: any, index: any) {
    this.selectedDateIndex = index;
    this.selectedDateString = dateItem?.code;
    this.selectedDateObject = this.generateDateObject(this.selectedDateString);
    if (this.selectedDateString != 'CUSTOM') {
      // this.fetchAllGraphsData()
    }
  }



  /**
   * This method generates toDate and fromDate object based on the given string
   * @param dateString date string
   * @returns 
   */
  generateDateObject(dateString: string) {
    let toDate: any;
    let fromDate: any;


    switch (dateString.toUpperCase()) {
      case 'TODAY':
        fromDate = moment().format(this.dateFormat);
        toDate = moment().add(1, 'days').format(this.dateFormat)
        break

      case 'YESTERDAY':
        fromDate = moment().subtract(1, 'days').format(this.dateFormat)
        toDate = moment().format(this.dateFormat);
        break

      case '7D':
        fromDate = moment().subtract(7, 'days').add(1, 'days').format(this.dateFormat)
        toDate = moment().add(1, 'days').format(this.dateFormat);
        break

      case '30D':
        fromDate = moment().subtract(30, 'days').add(1, 'days').format(this.dateFormat)
        toDate = moment().add(1, 'days').format(this.dateFormat);
        break

      case '3M':
        fromDate = moment().subtract(3, 'months').format(this.dateFormat)
        toDate = moment().add(1, 'days').format(this.dateFormat);
        break

      case '6M':
        fromDate = moment().subtract(6, 'months').format(this.dateFormat)
        toDate = moment().add(1, 'days').format(this.dateFormat);
        break

      case '12M':
        fromDate = moment().subtract(12, 'months').format(this.dateFormat)
        toDate = moment().add(1, 'days').format(this.dateFormat);
        break

      case 'ALL':
        fromDate = null;
        toDate = null;
        break
    }
    if (fromDate != null && toDate != null) {
      return {
        fromDate: fromDate,
        toDate: toDate
      }
    } else {
      return {};
    }
  }


  /**
  * Genarates time line graphs
  */
  generateTimeLineGraph(graphsRawData: any[], totalCount: any) {
    let seriesData: any[] = [];
    let datesData: any[] = [];

    graphsRawData.forEach((element) => {
      seriesData.push(element?.count);
    });

    graphsRawData.forEach((element) => {
      datesData.push(element?.date);
    });

    console.log(seriesData, 'series data')
    console.log(datesData, 'dates data')

    let element = document.getElementById('timeline-graph') ? document.getElementById('timeline-graph') : '';
    let myOptions = {
      chart: {
        type: 'line',
        style: {
          fontFamily: 'Inter'
        },
        marginLeft: 80,
        marginRight: 50,
        panning: true,
      },
      title: {
        text: "",
        // align: 'left',
        // margin: 50
      },
      // subtitle: {
      //   text: ' Total number of leads created over time.',
      //   align: 'left'
      // },
      credits: {
        enabled: false
      },
      tooltip: {
        // formatter: function () {
        //   return `<span style="width:full;padding:5px;"> <span style="align="center">${moment(this.x).format('D-MMM-Y')} : <strong> ${this.y}</span></strong></span> `
        // }
      },
      xAxis: {
        categories: datesData,
        scrollbar: {
          width: 10,
          enabled: true,
          buttonBorderRadius: 0,
          buttonBorderWidth: 3,
          height: 5
        },
      },
      yAxis: {
        title: {
          text: ''
        },
        allowDecimals: false,
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Leads Count',
        data: seriesData
      }]
    }
    console.log(219, element)
    if (element) {
      console.log(element, 'elemt')
      this.highchart.createChart(element, myOptions)
    }

  }

  /**
* Genarates sources overview graph
*/
  generateRegionwiseOverViewData(graphsRawData: any[], labels: any[], count: any) {

    let seriesData: { name: any; data: any; color: any; }[] = []
    let categoriesData: any[] = [];
    let coloursData: any[] = [];
    let yAxisMax = 0;
    labels.forEach((label) => {
      categoriesData.push(label);
    });
    graphsRawData.forEach((element) => {
      coloursData.push(element?.textColor[0])
    });
    graphsRawData.forEach((element, index) => {
      seriesData.push({ name: element?.label, data: element?.data, color: coloursData[index] })
    });
    seriesData.forEach((element, index) => {
      let maxElement = Math.max(...element?.data);
      if (maxElement > yAxisMax) {
        yAxisMax = maxElement;
      }
    });
    let xAxisMax = categoriesData?.length - 1 < 6 ? categoriesData?.length - 1 : 5
    let myOptions = {
      chart: {
        type: 'column',
        style: {
          fontFamily: 'Inter'
        },
        marginLeft: 80,
        marginRight: 40,
        panning: true,
      },
      title: {
        text: "",
        // align: 'left',
        // margin: 50
      },
      subtitle: {
        // text: 'Total number of Opportunities assigned to all executives.',
        // align: 'left',
      },
      xAxis: {
        max: xAxisMax,
        categories: categoriesData,
        scrollbar: {
          width: 10,
          enabled: true,
          buttonBorderRadius: 0,
          buttonBorderWidth: 3,
          height: 5
        },
        tickLength: 0
      },
      yAxis: {
        min: 0,
        max: yAxisMax,
        title: {
          text: ''
        },
        allowDecimals: false
      },
      legend: {
        reversed: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        // formatter: function () {
        //   return `<span style="width:full;"> <strong><span style="color:${this.color}">\u25CF</span>&nbsp;<span style="align="center">${this.series.name} : ${this.y}</span></strong></span> `
        // }
      },
      plotOptions: {
        series: {
          colorByPoint: false,
          pointWidth: 20,
          borderRadius: {
            radius: 8
          },
        }
      },
      series: seriesData
    };
    this.highchart.createChart(document.getElementById('overview-graph'), myOptions)
  }



  getAdminTimelineData() {
    let data = [
      {
        count: 9,
        date: '2021-2-8'
      },
      {
        count: 5,
        date: '2021-2-8'
      },
      {
        count: 8,
        date: '2021-2-8'
      },
      {
        count: 27,
        date: '2021-2-8'
      },
      {
        count: 47,
        date: '2021-2-8'
      },
      {
        count: 4,
        date: '2021-2-8'
      },
      {
        count: 8,
        date: '2021-2-8'
      },
      {
        count: 27,
        date: '2021-2-8'
      },
      {
        count: 47,
        date: '2021-2-8'
      },
      {
        count: 4,
        date: '2021-2-8'
      },
      {
        count: 8,
        date: '2021-2-8'
      },
      {
        count: 27,
        date: '2021-2-8'
      },
      {
        count: 47,
        date: '2021-2-8'
      },
      {
        count: 4,
        date: '2021-2-8'
      },
      {
        count: 8,
        date: '2021-2-8'
      },
      {
        count: 27,
        date: '2021-2-8'
      },
      {
        count: 47,
        date: '2021-2-8'
      },
      {
        count: 4,
        date: '2021-2-8'
      },
      {
        count: 8,
        date: '2021-2-8'
      },
      {
        count: 27,
        date: '2021-2-8'
      },
      {
        count: 47,
        date: '2021-2-8'
      },
      {
        count: 4,
        date: '2021-2-8'
      },
      {
        count: 8,
        date: '2021-2-8'
      },
      {
        count: 27,
        date: '2021-2-8'
      },
      {
        count: 47,
        date: '2021-2-8'
      },
      {
        count: 4,
        date: '2021-2-8'
      }
    ]
    this.generateTimeLineGraph(data, 55)
  }


  getRegionWiseOverView() {
    let data: any = [
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        label: 'Open',
        textColor: ["#2962FF"]
      },
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        label: 'In progress',
        textColor: ["#00BFA4"]
      },
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        label: 'Completed',
        textColor: ["#2962FF"]
      },
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        label: 'Rejected',
        textColor: ["#2962FF"]
      }
    ]
    let labelsData: any = ['Abhi', 'Amar', 'Harsha', 'Naveen', 'venkat', 'Abhi', 'Amar', 'Harsha', 'Naveen', 'venkat', 'Abhi', 'Amar', 'Harsha', 'Naveen', 'venkat'];
    let count = 44
    this.generateRegionwiseOverViewData(data, labelsData, count)
  }
}
