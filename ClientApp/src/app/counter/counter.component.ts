import {Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{

  constructor(private router: Router) {}


  ngOnInit(): void {

  }



  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
