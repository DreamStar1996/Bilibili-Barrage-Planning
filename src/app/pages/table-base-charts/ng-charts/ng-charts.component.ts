import { Component, OnInit } from "@angular/core";
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-ng-charts",
  templateUrl: "./ng-charts.component.html",
  styleUrls: ["./ng-charts.component.scss"],
})
export class NgChartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.Onechartdiv();
    this.Twochartdiv();
    this.Threechartdiv();
    this.Fourchartdiv();
    this.Fivechartdiv();
  }

  Onechartdiv() {
    let chart = am4core.create("Onechartdiv", am4charts.RadarChart);

    chart.data = [
      {
        country: "USA",
        visits: 2025,
      },
      {
        country: "China",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1809,
      },
      {
        country: "Germany",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "France",
        visits: 1114,
      },
      {
        country: "India",
        visits: 984,
      },
      {
        country: "Spain",
        visits: 711,
      },
      {
        country: "Netherlands",
        visits: 665,
      },
      {
        country: "Russia",
        visits: 580,
      },
      {
        country: "South Korea",
        visits: 443,
      },
      {
        country: "Canada",
        visits: 441,
      },
    ];

    chart.innerRadius = am4core.percent(40);

    let categoryAxis = chart.xAxes.push(
      new am4charts.CategoryAxis<am4charts.AxisRendererCircular>()
    );
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

    let valueAxis = chart.yAxes.push(
      new am4charts.ValueAxis<am4charts.AxisRendererRadial>()
    );
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    valueAxis.renderer.grid.template.strokeOpacity = 0.08;

    chart.seriesContainer.zIndex = -10;

    let series = chart.series.push(new am4charts.RadarColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.radarColumn.cornerRadius = 5;
    series.columns.template.radarColumn.innerCornerRadius = 0;

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", (fill, target) => {
      return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(() => {
      am4core.array.each(chart.data, (item) => {
        item.visits *= Math.random() * 0.5 + 0.5;
        item.visits += 10;
      });
      chart.invalidateRawData();
    }, 2000);

    categoryAxis.sortBySeries = series;

    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.behavior = "none";
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
  }

  Twochartdiv() {
    let chart = am4core.create("Twochartdiv", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text =
      "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;
    chart.data = [
      {
        network: "Facebook",
        MAU: 2255250000,
      },
      {
        network: "Google+",
        MAU: 430000000,
      },
      {
        network: "Instagram",
        MAU: 1000000000,
      },
      {
        network: "Pinterest",
        MAU: 246500000,
      },
      {
        network: "Reddit",
        MAU: 355000000,
      },
      {
        network: "TikTok",
        MAU: 500000000,
      },
      {
        network: "Tumblr",
        MAU: 624000000,
      },
      {
        network: "Twitter",
        MAU: 329500000,
      },
      {
        network: "WeChat",
        MAU: 1000000000,
      },
      {
        network: "Weibo",
        MAU: 431000000,
      },
      {
        network: "Whatsapp",
        MAU: 1433333333,
      },
      {
        network: "YouTube",
        MAU: 1900000000,
      },
    ];
  }

  Threechartdiv() {
    let chart = am4core.create("Threechartdiv", am4charts.XYChart);

    chart.data = [
      {
        country: "USA",
        visits: 2025,
      },
      {
        country: "China",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1809,
      },
      {
        country: "Germany",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "France",
        visits: 1114,
      },
      {
        country: "India",
        visits: 984,
      },
      {
        country: "Spain",
        visits: 711,
      },
      {
        country: "Netherlands",
        visits: 665,
      },
      {
        country: "Russia",
        visits: 580,
      },
      {
        country: "South Korea",
        visits: 443,
      },
      {
        country: "Canada",
        visits: 441,
      },
    ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
      am4core.array.each(chart.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
      });
      chart.invalidateRawData();
    }, 2000);

    categoryAxis.sortBySeries = series;
  }

  Fourchartdiv() {
    // Create chart instance
    let chart = am4core.create("Fourchartdiv", am4charts.RadarChart);

    // Add data
    chart.data = [
      {
        category: "Research",
        value: 80,
        full: 100,
      },
      {
        category: "Marketing",
        value: 35,
        full: 100,
      },
      {
        category: "Distribution",
        value: 92,
        full: 100,
      },
      {
        category: "Human Resources",
        value: 68,
        full: 100,
      },
    ];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    let categoryAxis = chart.yAxes.push(
      new am4charts.CategoryAxis<am4charts.AxisRendererRadial>()
    );
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    //categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add(
      "fill",
      function (fill, target) {
        return target.dataItem.index >= 0
          ? chart.colors.getIndex(target.dataItem.index)
          : fill;
      }
    );
    categoryAxis.renderer.minGridDistance = 10;

    let valueAxis = chart.xAxes.push(
      new am4charts.ValueAxis<am4charts.AxisRendererCircular>()
    );
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    // Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    series1.columns.template.fillOpacity = 0.08;
    //series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
  }

  Fivechartdiv() {
    // create chart
    let chart = am4core.create("Fivechartdiv", am4charts.TreeMap);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [
      {
        name: "First",
        children: [
          {
            name: "A1",
            value: 100,
          },
          {
            name: "A2",
            value: 60,
          },
          {
            name: "A3",
            value: 30,
          },
        ],
      },
      {
        name: "Second",
        children: [
          {
            name: "B1",
            value: 135,
          },
          {
            name: "B2",
            value: 98,
          },
          {
            name: "B3",
            value: 56,
          },
        ],
      },
      {
        name: "Third",
        children: [
          {
            name: "C1",
            value: 335,
          },
          {
            name: "C2",
            value: 148,
          },
          {
            name: "C3",
            value: 126,
          },
          {
            name: "C4",
            value: 26,
          },
        ],
      },
      {
        name: "Fourth",
        children: [
          {
            name: "D1",
            value: 415,
          },
          {
            name: "D2",
            value: 148,
          },
          {
            name: "D3",
            value: 89,
          },
          {
            name: "D4",
            value: 64,
          },
          {
            name: "D5",
            value: 16,
          },
        ],
      },
      {
        name: "Fifth",
        children: [
          {
            name: "E1",
            value: 687,
          },
          {
            name: "E2",
            value: 148,
          },
        ],
      },
    ];

    chart.colors.step = 2;

    // define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";

    chart.zoomable = false;
    let bgColor = new am4core.InterfaceColorSet().getFor("background");

    // level 0 series template
    let level0SeriesTemplate = chart.seriesTemplates.create("0");
    let level0ColumnTemplate = level0SeriesTemplate.columns.template;

    level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
    level0ColumnTemplate.fillOpacity = 0;
    level0ColumnTemplate.strokeWidth = 4;
    level0ColumnTemplate.strokeOpacity = 0;

    // level 1 series template
    let level1SeriesTemplate = chart.seriesTemplates.create("1");
    let level1ColumnTemplate = level1SeriesTemplate.columns.template;

    level1SeriesTemplate.tooltip.animationDuration = 0;
    level1SeriesTemplate.strokeOpacity = 1;

    level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
    level1ColumnTemplate.fillOpacity = 1;
    level1ColumnTemplate.strokeWidth = 4;
    level1ColumnTemplate.stroke = bgColor;

    let bullet1 = level1SeriesTemplate.bullets.push(
      new am4charts.LabelBullet()
    );
    bullet1.locationY = 0.5;
    bullet1.locationX = 0.5;
    bullet1.label.text = "{name}";
    bullet1.label.fill = am4core.color("#ffffff");

    chart.maxLevels = 2;
  }
}
