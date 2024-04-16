import { Injectable } from '@angular/core';

export enum ActionType {
  LifeCycle = 'LifeCycle',
  Default = 'Action',
}
interface Action {
  type: ActionType;
  text: string;
}
@Injectable({
  providedIn: 'root',
})
export class ActionlogsService {
  public actionLogs: Action[] = [];
  constructor() {}

  public addLog(action: Action) {
    console.log(`[${action.type}] ${action.text}`);
    this.actionLogs.push(action);
  }
}
