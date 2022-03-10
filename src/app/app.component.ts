import { Component, OnInit } from '@angular/core';
import "@amap/amap-jsapi-types";
declare var AMap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  aMap!: AMap.Map;

  ngOnInit() {
    this.aMap = new AMap.Map("container", {
      zoom: 13,
      center: [116.43, 39.92],
      resizeEnable: true
    });

    var marker = new AMap.Marker({
      position: new AMap.LngLat(116.39, 39.92),
    });

    var polylinePath = [
      new AMap.LngLat(116.41, 39.93),
      new AMap.LngLat(116.43, 39.91)
    ];

    var polyline = new AMap.Polyline({
      path: polylinePath
    });

    var polygonPath = [
      new AMap.LngLat(116.46, 39.93),
      new AMap.LngLat(116.44, 39.91),
      new AMap.LngLat(116.49, 39.91)
    ];

    var polygon = new AMap.Polygon({
      path: polygonPath
    });

    // 将点，线，面添加到地图
    this.aMap.add([marker, polyline, polygon]);

    console.log([1,1,2].unique());
  }

  clear() {
    console.log(this.aMap.getAllOverlays());
    this.aMap.clearMap();
  }
}
