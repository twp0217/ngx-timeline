import { Component, OnInit, Input, Directive, TemplateRef, ContentChild } from '@angular/core';

import { TimelineEvent } from './timeline-event';
import { TimelineDate, TimelineHeader, TimelineBody, TimelineFooter } from './ngx-timeline.directive';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline.component.html',
  styleUrls: ['./ngx-timeline.component.scss']
})
export class NgxTimelineComponent implements OnInit {
  @Input() events: Array<TimelineEvent>;
  @Input() timelineClass: string;
  @Input() timelineStyle: any;
  @Input() dateFormat: string = 'yyyy-MM-dd';

  @ContentChild(TimelineDate) dateTemplate: TimelineDate;
  @ContentChild(TimelineHeader) headerTemplate: TimelineHeader;
  @ContentChild(TimelineBody) bodyTemplate: TimelineBody;
  @ContentChild(TimelineFooter) footerTemplate: TimelineFooter;

  constructor() { }

  ngOnInit() {
  }

}
