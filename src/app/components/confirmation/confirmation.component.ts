import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  template: `<h2 mat-dialog-title>Do you want to confirm?</h2>
  <mat-dialog-content class="mat-typography">
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button class="btn btn-danger" mat-dialog-close>No</button>
    <button mat-button class="btn btn-success" [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
  </mat-dialog-actions>`
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
