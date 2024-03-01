import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
comp2() {
throw new Error('Method not implemented.');
}
  constructor(private router:Router){}
  onclick(){
    this.router.navigate(['comp2'])
  }
}
