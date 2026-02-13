import { Component } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-list-amms',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    TabsModule,
    InputGroupModule,
    ButtonModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    TableModule,
    TagModule,
  ],
  templateUrl: './list-amms.html',
  styleUrl: './list-amms.scss',
})
export class ListAmms {
  constructor(private router: Router) {}
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

  viewDetail(row: { numero: string }) {
    this.router.navigate(['/backoffice/direction/detail-amms', row.numero]);
  }
}
