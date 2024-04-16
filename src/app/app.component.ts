import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionpanelComponent } from '../components/actionpanel/actionpanel.component';
import { ActionlogsComponent } from '../components/actionlogs/actionlogs.component';
import { PlaygroundComponent } from '../components/playground/playground.component';
import {
  ActionType,
  ActionlogsService,
} from '../injectables/actionlogs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ActionpanelComponent,
    ActionlogsComponent,
    PlaygroundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lifecycle-sandbox';

  constructor(private readonly actionLogsService: ActionlogsService) {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App Constructor',
    });
  }

  ngOnInit() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App OnInit',
    });
  }

  ngOnChanges() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App OnChanges',
    });
  }

  ngDoCheck() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App DoCheck',
    });
  }

  ngOnDestroy() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App Destroy',
    });
  }

  ngAfterContentInit() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App AfterContentInit',
    });
  }

  ngAfterContentChecked() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App AfterContentChecked',
    });
  }

  ngAfterViewInit() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App AfterViewInit',
    });
  }

  ngAfterViewChecked() {
    this.actionLogsService.actionLogs.push({
      type: ActionType.LifeCycle,
      text: 'App AfterViewChecked',
    });
  }
}
