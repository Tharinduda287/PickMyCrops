import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {


  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}


