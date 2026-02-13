import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officine-list',
  standalone: true,
  imports: [TabsModule,
    OverlayBadgeModule,
    FormsModule,
    InputTextModule,
    InputGroupModule, 
    InputGroupAddonModule,
    SelectModule],
  templateUrl: './officine-list.html',
  styleUrl: './officine-list.scss',
})
export class OfficineList {
  constructor (private router: Router) {
    
  }
  statusFilter?: string;
  typeFilter?: string;

  statusOptions = [
    { label: 'Tous les statuts', value: null },
    { label: 'Validé', value: 'Valide' },
    { label: 'Retiré', value: 'Retire' },
    { label: 'Expiré', value: 'Expire' },
  ];

  typeOptions = [
    { label: 'Tous les types', value: null },
    { label: 'Antibiotique', value: 'Antibiotique' },
    { label: 'Antalgique', value: 'Antalgique' },
  ];

  amms = [
    {
      numero: '7032',
      medicament: 'STERITAX INJ 1,5',
      dateValidite: '2023-06-15',
      dci: 'CEFTRIAXONE / SULBACTAM',
      laboratoire: 'IPCA LABORATORIES LTD',
      classe: 'Antibiotique',
      prix: 2804,
      statut: 'Validé'
    },
    {
      numero: '7032',
      medicament: 'STERITAX INJ 1,5',
      dateValidite: '2023-06-15',
      dci: 'CEFTRIAXONE / SULBACTAM',
      laboratoire: 'IPCA LABORATORIES LTD',
      classe: 'Antibiotique',
      prix: 2804,
      statut: 'Validé'
    },
    {
      numero: '7032',
      medicament: 'STERITAX INJ 1,5',
      dateValidite: '2023-06-15',
      dci: 'CEFTRIAXONE / SULBACTAM',
      laboratoire: 'IPCA LABORATORIES LTD',
      classe: 'Antibiotique',
      prix: 2804,
      statut: 'Validé'
    }
    
    // ...
  ];
}
