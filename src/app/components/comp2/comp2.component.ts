import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  home() {
    throw new Error('Method not implemented.');
    }
      constructor(private router:Router){}
      onclick(){
        this.router.navigate(['home'])
      }
    }
  
