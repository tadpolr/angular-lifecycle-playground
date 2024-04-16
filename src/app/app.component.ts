import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaygroundComponent } from '../components/playground/playground.component';
import {
  ActionType,
  ActionlogsService,
} from '../injectables/actionlogs.service';
import { ContentplaygroundComponent } from '../components/contentplayground/contentplayground.component';
import { AnotherplaygroundComponent } from '../components/anotherplayground/anotherplayground.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AnotherplaygroundComponent,
    ContentplaygroundComponent,
    PlaygroundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnChanges {
  private logPrefix = 'App';

  constructor(private readonly actionLogsService: ActionlogsService) {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} Constructor`,
    });
  }

  ngOnInit() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} OnInit`,
    });
  }

  ngOnChanges() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} OnChanges`,
    });
  }

  ngDoCheck() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} DoCheck`,
    });
  }

  ngOnDestroy() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} Destroy`,
    });
  }

  ngAfterContentInit() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} AfterContentInit`,
    });
  }

  ngAfterContentChecked() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} AfterContentChecked`,
    });
  }

  ngAfterViewInit() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} AfterViewInit`,
    });
  }

  ngAfterViewChecked() {
    this.actionLogsService.addLog({
      type: ActionType.LifeCycle,
      text: `${this.logPrefix} AfterViewChecked`,
    });
  }

  protected valuePassIntoPlayground: string = 'initial value';
  protected handleClickUpdatePlaygroundValue() {
    this.actionLogsService.addLog({
      type: ActionType.Default,
      text: `${this.logPrefix} Change value outside playground`,
    });
    this.valuePassIntoPlayground = `${(Math.random() * 100).toFixed(0)}`;
  }

  protected valuePassIntoNgContent: string = 'Initial value';
  protected handleClickUpdateNgContentValue() {
    this.actionLogsService.addLog({
      type: ActionType.Default,
      text: `${this.logPrefix} Change value outside NgContent`,
    });
    this.valuePassIntoNgContent = `${(Math.random() * 100).toFixed(0)}`;
  }

  protected valuePassIntoAnotherPlayground: string = 'Initial value';
  protected handleClickUpdateAnotherPlaygroundValue() {
    this.actionLogsService.addLog({
      type: ActionType.Default,
      text: `${this.logPrefix} Change value outside another playground`,
    });
    this.valuePassIntoAnotherPlayground = `${(Math.random() * 100).toFixed(0)}`;
  }

  protected valuePassIntoOnPushPlayground: string = 'Initial value';
  protected handleClickUpdateOnPushPlaygroundValue() {
    this.actionLogsService.addLog({
      type: ActionType.Default,
      text: `${this.logPrefix} Change value outside onPush playground`,
    });
    this.valuePassIntoOnPushPlayground = `${(Math.random() * 100).toFixed(0)}`;
  }
}
