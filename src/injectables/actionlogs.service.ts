import { Injectable } from '@angular/core';

export enum ActionType {
  LifeCycle = 'LifeCycle',
  Default = 'Default',
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
}
