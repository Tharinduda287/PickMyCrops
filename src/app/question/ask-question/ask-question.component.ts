import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Quill from 'quill';
import {DomSanitizer} from "@angular/platform-browser";
import { Api } from 'app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  form: FormGroup;
  private outputText:string;
  api:Api;
  constructor(private fb: FormBuilder,private sanitizer:DomSanitizer,api:Api) { 
    this.api=api;
    this.form = fb.group({
      editor: ['']
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
      // console.log('view child + directly subscription', data.html);
      // pdatadata.html;
      this.outputText=data.htlm;
      // document.getElementById("output-message").innerHTML = <string>data.html;
    });
  }
  test(text){
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  saveQuestion(question:any,title:string){
    this.api.post("Question",{"Title":title,"question":question}).subscribe((data:any)=>{
      console.log(data);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
    console.log(question,title);
  }
}
