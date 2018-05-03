import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-activity',
  template: `<h1 mat-dialog-title>您确定要退出吗?</h1>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">是</button>
              <button mat-button [mat-dialog-close]="false">否</button>
            </mat-dialog-actions>`
})
export class StopActivityComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
