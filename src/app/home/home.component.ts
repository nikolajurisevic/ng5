import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[

    trigger('goals',[
      transition('* => *',[
        query(':enter', style({ opacity : 0 }),{optional: true}),


        query(':enter', stagger('300ms', [
          animate('.6s ease-in',keyframes([

            style({opacity:     0,  transform:    'translateY(-75%)'  , offset: 0}),
            style({opacity:   .2,  transform:    'translateY(-35%)'   , offset: .2}),
            style({opacity:   .4,  transform:    'translateY(0%)'   , offset: .4}),
            style({opacity:   .6, transform:    'translateY(35%)'  , offset: .6}),
            style({opacity:   .7,  transform:    'translateY(15%)'   , offset: .8}),
            style({opacity:   1,  transform:    'translateY(-0%)'   , offset: 1}),

          ]))]),{optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals =['My first goal','I want to fuk', 'Acid test'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
   addItem(){
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    }
}

