import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-conformite-test',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    DialogModule,
    ButtonModule
],
  templateUrl: './conformite-test.html',
  styleUrl: './conformite-test.scss',
})
export class ConformiteTest {
  value3: string |undefined;

  //Montrer le modal
  visible: boolean = false;
  ShowDialog(){
    this.visible=true;
  }
}
