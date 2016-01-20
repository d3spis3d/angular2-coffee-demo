import {Component} from 'angular2/core';

import {WeekViewComponent} from './week-view.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <week-view></week-view>
  `,
  directives: [WeekViewComponent]
})
export class AppComponent {
  public title = 'Coffee Planner';
}
