import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-essai-list',
  standalone: true,
  imports: [InputGroupAddonModule, 
    InputGroupModule, TabsModule, 
    OverlayBadgeModule,
    InputTextModule
  ],
  templateUrl: './essai-list.html',
  styleUrl: './essai-list.scss',
})
export class EssaiList {

  constructor( private router : Router){}
  viewDetail(index: number){
    this.router.navigate(['/backoffice/direction/essai-detail', index]);
  }
}
