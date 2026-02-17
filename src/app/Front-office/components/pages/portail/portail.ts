import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portail',
  standalone: true,
  imports: [],
  templateUrl: './portail.html',
  styleUrl: './portail.scss',
})
export class Portail {
  constructor(private router: Router){}

logIn(){
  this.router.navigate(['/auth']);
}
}
