import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ActionType,
  ActionlogsService,
} from '../../injectables/actionlogs.service';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {
  @Input() public valueFromInput: string = '';

  protected valueInTheComponent = 'some-value';

  protected valueInTheComponentSetInOnInit?: string;

  private logPrefix = 'Playground';

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

  protected handleClickChangeValue() {
    this.actionLogsService.addLog({
      type: ActionType.Default,
      text: `${this.logPrefix} Change value in the component`,
    });
    this.valueInTheComponent = `${(Math.random() * 100).toFixed(0)}`;
  }
}
