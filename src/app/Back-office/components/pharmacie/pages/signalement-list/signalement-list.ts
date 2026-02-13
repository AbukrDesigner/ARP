import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-signalement-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './signalement-list.html',
  styleUrl: './signalement-list.scss',
})
export class SignalementList {
  searchValue = '';
  selectedStatus: 'Validé' | 'En attente' | 'Rejeté' | 'Tous' = 'Tous';

  statusOptions: Array<{ label: string; value: string }> = [
    { label: 'Tous', value: 'Tous' },
    { label: 'Validé', value: 'Validé' },
    { label: 'En attente', value: 'En attente' },
    { label: 'Rejeté', value: 'Rejeté' },
  ];

  signalements: Array<{
    id: number;
    type: string;
    sousType?: string;
    signalerPar: string;
    dateSignalement: string;
    status: 'Validé' | 'En attente' | 'Rejeté';
  }> = [
    {
      id: 7032,
      type: 'Demande de transfert',
      sousType: 'Pharmacie Charo',
      signalerPar: 'Gerald Charo',
      dateSignalement: '15/11/2025',
      status: 'Validé',
    },
    {
      id: 7033,
      type: "Demande d’attribution de site",
      sousType: 'Pharmacie Charo',
      signalerPar: 'Gerald Charo',
      dateSignalement: '10/07/2024',
      status: 'Validé',
    },
  ];

  getStatusSeverity(status: 'Validé' | 'En attente' | 'Rejeté'): 'success' | 'warn' | 'danger' {
    switch (status) {
      case 'Validé':
        return 'success';
      case 'En attente':
        return 'warn';
      case 'Rejeté':
        return 'danger';
    }
  }

  onView(row: any): void {
    console.log('Voir signalement', row);
  }

  onEdit(row: any): void {
    console.log('Modifier', row);
  }

  onDownload(row: any): void {
    console.log('Télécharger signalement', row);
  }
}
