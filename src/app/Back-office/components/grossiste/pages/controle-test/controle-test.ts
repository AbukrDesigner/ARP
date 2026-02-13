import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-controle-test',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './controle-test.html',
  styleUrl: './controle-test.scss',
})
export class ControleTest {
  value3: string | undefined;
  visible: boolean = false;
  ShowDialog(){
    this.visible=true;
  }

}
