import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-main-portail',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-portail.html',
  styleUrl: './main-portail.scss',
})
export class MainPortail {}
