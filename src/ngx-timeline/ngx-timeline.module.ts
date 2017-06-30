import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTimelineComponent } from './ngx-timeline.component';
import { TimelineDate, TimelineHeader, TimelineBody, TimelineFooter } from './ngx-timeline.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxTimelineComponent,

    TimelineDate,
    TimelineHeader,
    TimelineBody,
    TimelineFooter
  ],
  exports: [
    NgxTimelineComponent,

    TimelineDate,
    TimelineHeader,
    TimelineBody,
    TimelineFooter
  ]
})
export class NgxTimelineModule { }
