import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('goals',[
      transition('* => *',[
          query(":enter",style({opacity:0}))
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText:string = "Add New Item";
  GoalText:string = "My First Item";
  goals = [];  
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.GoalText);
    this.GoalText = '';
    this.itemCount = this.goals.length;
  }

}
 