import { Component, OnInit, ViewChild, EventEmitter, Inject } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {DomSanitizer} from "@angular/platform-browser";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfirmationComponent } from 'app/components/confirmation/confirmation.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  name:string;
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addCategory(){
    
    const dialogRef = this.dialog.open(AddNewCategoryComponent, {
      width: '1000px',
      data: {}
    }); 
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteCategory(index){
    this.dialog.open(ConfirmationComponent).afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);//if true call api to delete
      if(result==true){
        const data = this.dataSource.data;
        data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
        this.dataSource.data = data;
      }
    });
  }
  editCategory(element){
    console.log(element);
    const dialogRef = this.dialog.open(AddNewCategoryComponent, {
      width: '1000px',
      data: element
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.symbol}`);
    });
  }
  ConfirmDelete(){
    console.log("delete element");
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: '<p>fdfs</p>'},
  {position: 2, name: 'Helium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'He'},
  {position: 3, name: 'Lithium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Be'},
  {position: 5, name: 'Boron', weight:"Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'B'},
  {position: 6, name: 'Carbon', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'F'},
  {position: 10, name: 'Neon', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Mg'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Mg'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Mg'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Mg'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Mg'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol: 'Mg'},
  {position: 12, name: 'Magnesium', weight: "Change event object that is emitted when the user selects a different page size or navigates to another page.", symbol:"mh"},
];
@Component({
  selector: 'add-new-category',
  templateUrl: 'add-new-category.html',
})
export class AddNewCategoryComponent implements OnInit {
  form: FormGroup;
  private outputText:string;
  constructor(private fb: FormBuilder,private sanitizer:DomSanitizer,
    public dialogRef: MatDialogRef<AddNewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) { 
    this.form = fb.group({
      editor: [data.symbol]
    })
  }
  @ViewChild('editor') editor: QuillEditorComponent
  ngOnInit() {
    this.editor
    .onContentChanged
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(data => {
      this.data.symbol=data.html
      console.log(data.symbol)
      this.outputText=data.htlm;
    });
  }
  test(text){
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  saveQuestion(question:any){
    console.log(question);
  }
}

@Component({
  selector: 'add-new-category',
  template: `<h2 mat-dialog-title>Do you want to confirm?</h2>
  <mat-dialog-content class="mat-typography">
    <h3>Develop across all platforms</h3>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>No</button>
    <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
  </mat-dialog-actions>`,
})
export class TestComponent{
}