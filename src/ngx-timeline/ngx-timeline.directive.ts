import { Directive, TemplateRef } from '@angular/core';

/**
 * 自定义模板
 */

// 自定义时间
@Directive({ selector: 'ng-template[timelineDate]' })
export class TimelineDate {
  constructor(public templateRef: TemplateRef<any>) { }
}

// 自定义页眉
@Directive({ selector: 'ng-template[timelineHeader]' })
export class TimelineHeader {
  constructor(public templateRef: TemplateRef<any>) { }
}

// 自定义内容
@Directive({ selector: 'ng-template[timelineBody]' })
export class TimelineBody {
  constructor(public templateRef: TemplateRef<any>) { }
}

// 自定义页脚
@Directive({ selector: 'ng-template[timelineFooter]' })
export class TimelineFooter {
  constructor(public templateRef: TemplateRef<any>) { }
}
