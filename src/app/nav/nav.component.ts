import { Component, OnInit } from '@angular/core';
import {Category} from './category'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  title="STORE";
  categories:Category[]=[
    {id:1,name:"FRUITS"},
    {id:2,name:"VEGETABLES"}
  ]

  ngOnInit(): void {
  }

}
