import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Quill from 'quill';
import { ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { Api } from 'app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class QuestionComponent implements OnInit {

  form: FormGroup;
  public id: string;
  private arr=[1,2,3];
  private outputText:string;
  QnA=[];
  api:Api;
  constructor(private route: ActivatedRoute,private fb: FormBuilder,private sanitizer:DomSanitizer,api:Api) {
    this.api = api;
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.get("Question/"+this.id) .subscribe((data:any)=>{
      this.QnA = data;
      console.log(data);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
    this.form = fb.group({
      editor: ['']
    })
    
   }
  @ViewChild('editor') editor: QuillEditorComponent
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.form
    .controls
    .editor
    .valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(data => {
      // console.log('native fromControl value changes with debounce', data)
    });

    this.editor
    .onContentChanged
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(data => {
      // console.log('view child + directly subscription', data.html);
      // pdatadata.html;
      this.outputText=data.htlm;
      // document.getElementById("output-message").innerHTML = <string>data.html;
    });
  }
  test(text){
    return this.sanitizer.bypassSecurityTrustHtml(text);
    // .replace('<img', 'class="outputImage"')
    // .replace('class="outputImage" class="outputImage"','class="outputImage"'));
  }
  SaveYourAnswar(answer:any){
    this.api.post("Answer",{"Answar":answer,"QuestionId":this.id}).subscribe((data:any)=>{
      console.log(data);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
    console.log(this.id+":"+answer);
  }

}
