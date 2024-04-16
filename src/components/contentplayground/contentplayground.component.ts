import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ActionType,
  ActionlogsService,
} from '../../injectables/actionlogs.service';

@Component({
  selector: 'app-contentplayground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contentplayground.component.html',
  styleUrl: './contentplayground.component.css',
})
export class ContentplaygroundComponent {
  @Input() public valueFromInput: string = '';

  protected value: string = 'initial value';

  private logPrefix = 'NgContent';

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

  protected valueInTheComponent: string = 'Initial Value';
  protected handleClickChangeValue() {
    this.actionLogsService.addLog({
      type: ActionType.Default,
      text: `${this.logPrefix} Change value in the component`,
    });
    this.valueInTheComponent = `${(Math.random() * 100).toFixed(0)}`;
  }
}
