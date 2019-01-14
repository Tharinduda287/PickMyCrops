import { Component, OnInit, ViewChild, EventEmitter, Inject } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {DomSanitizer} from "@angular/platform-browser";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfirmationComponent } from 'app/components/confirmation/confirmation.component';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { Api } from 'app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

   ELEMENT_DATA: PeriodicElement[] = [
    {Id: 1, Name: 'Hydrogen', Description: "Change event object that is emitted when the user selects a different page size or navigates to another page.",Image:null},
    {Id: 2, Name: 'Helium', Description: "Change event object that is emitted when the user selects a different page size or navigates to another page.",Image:null},
    {Id: 3, Name: 'Lithium', Description: "Change event object that is emitted when the user selects a different page size or navigates to another page.",Image:null},
    {Id: 4, Name: 'Beryllium', Description: "Change event object that is emitted when the user selects a different page size or navigates to another page.",Image:null},
    {Id: 5, Name: 'Boron', Description:"Change event object that is emitted when the user selects a different page size or navigates to another page.",Image:null},
  ];

  displayedColumns: string[] = ['Id', 'Name', 'Description','Action'];
  dataSource; //= new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private api:Api) { 
    this.api.get("api/VegCategory").subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<PeriodicElement>(data);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
  }
  
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
      if(result!=""){
        console.log(result);
        this.api.post("api/VegCategory",result).subscribe((d:any)=>{
          //this.dataSource.data.push(d);
          const data = this.dataSource.data;
          data.push(d);
          this.dataSource.data = data;
        },(err:HttpErrorResponse)=>{
          console.log(err);
        });
      }
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
  Name: string;
  Id: number;
  Description: string;
  Image:string;
}

@Component({
  selector: 'add-new-category',
  templateUrl: 'add-new-category.html',
})
export class AddNewCategoryComponent implements OnInit {
  form: FormGroup;
  private outputText:string;
  constructor(private ng2ImgMax: Ng2ImgMaxService,private fb: FormBuilder,private sanitizer:DomSanitizer,
    public dialogRef: MatDialogRef<AddNewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) { 
    this.form = fb.group({
      //editor: [data.symbol]
    })
  }
  ngOnInit() {
  }
  test(text){
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  saveQuestion(question:any){
    console.log(question);
  }
  onImageChange(e){
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    this.ng2ImgMax.resizeImage(file, 200, 150).subscribe( //<- To Resize image width:200px height:150px
      result => {
        reader.readAsDataURL(result);
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.data['Image'] = reader.result;
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