import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news=[
    {
      "id":1557,
      "title":"(Flexible) Python Web Scrapers for a Search Engine (with content reformatting and posting)",
     "votes":5,
     "answers":3,
     "starter":"username",
     "tags":["vegitable","tomato"]
    },
    {
      "id":1888,
      "title":"Creating multi colored scatterplot in Python",
      "votes":4,
      "answers":1,
      "starter":"username",
      "tags":["vegitable","tomato"]
    },
    {
      "id":1779,
      "title":"Can't the audit logs be deleted from Google Cloud Platform Stackdriver logs?",
      "votes":3,
      "answers":5,
      "starter":"username",
      "tags":["vegitable","tomato"]
    },
    {
      "id":1654,
      "title":"i have integrate between angular 6 and spring mvc. angular is client process and spring mvc be a server side working",
      "votes":2,
      "answers":1,
      "starter":"username",
      "tags":["vegitable","tomato"]
    },
    {
      "id":1220,
      "title":"Sheets query using importrange with select where statement referencing sheet cell",
      "votes":1,
      "answers":2,
      "starter":"username",
      "tags":["vegitable","tomato"]
    },
    {
      "id":1334,
      "title":"Pandas - Take multiple columns values that have the same row value, and input into 1 column",
      "votes":0,
      "answers":0,
      "starter":"username",
      "tags":["vegitable","tomato"]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
