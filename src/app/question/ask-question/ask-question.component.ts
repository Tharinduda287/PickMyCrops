import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Quill from 'quill';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  form: FormGroup;
  private outputText:string;
  constructor(private fb: FormBuilder,private sanitizer:DomSanitizer) { 
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
  saveQuestion(question:any){
    console.log(question);
  }
}
