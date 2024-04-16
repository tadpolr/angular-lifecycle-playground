import { Component } from '@angular/core';
import { ActionlogsService } from '../../injectables/actionlogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actionlogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actionlogs.component.html',
  styleUrl: './actionlogs.component.css',
})
export class ActionlogsComponent {
  constructor(protected readonly actionLogsService: ActionlogsService) {}
}
