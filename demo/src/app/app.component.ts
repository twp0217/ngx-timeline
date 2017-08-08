import { Component } from '@angular/core';

import { TimelineEvent } from 'ngx-timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: Array<TimelineEvent>;

  ngOnInit() {
    this.events = new Array<TimelineEvent>();
    this.events.push({ "date": new Date(), "header": "代码托管服务 GitHub", "body": "GitHub可以托管各种git库，并提供一个web界面，但与其它像 SourceForge或Google Code这样的服务不同，GitHub的独特卖点在于从另外一个项目进行分支的简易性。为一个项目贡献代码非常简单：首先点击项目站点的“fork”的按 钮，然后将代码检出并将修改加入到刚才分出的代码库中，最后通过内建的“pull request”机制向项目负责人申请代码合并。", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "专为微信设计的 UI 库 WeUI", "body": "WeUI 是一套同微信原生视觉体验一致的基础样式库，为微信 Web 开发量身设计，可以令用户的使用感知更加统一。包含button、cell、dialog、toast、article、icon等各式元素。" });
    this.events.push({ "date": new Date(), "header": "JavaScript 图表库 ECharts", "body": "ECharts是一款由百度前端技术部开发的，基于Javascript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。" });
  }
}
