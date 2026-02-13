import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

type DemandeStatus = 'Validé' | 'En attente' | 'Rejeté';

type DemandeRow = {
  numero: number;
  type: string;
  sousType?: string;
  demandeur: string;
  dateDemande: string; // affichage (dd/MM/yyyy)
  status: DemandeStatus;
};

@Component({
  selector: 'app-demandes-list',
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
  templateUrl: './demandes-list.html',
  styleUrl: './demandes-list.scss',
})
export class DemandesList {
  // Filtres UI
  searchValue = '';
  selectedStatus: DemandeStatus | 'Tous' = 'Tous';

  statusOptions: Array<{ label: string; value: DemandeStatus | 'Tous' }> = [
    { label: 'Tous', value: 'Tous' },
    { label: 'Validé', value: 'Validé' },
    { label: 'En attente', value: 'En attente' },
    { label: 'Rejeté', value: 'Rejeté' },
  ];

  // Données (mock) — à remplacer par appel API quand prêt
  demandes: DemandeRow[] = [
    {
      numero: 7032,
      type: "Demande de transfert",
      sousType: "Pharmacie Charo",
      demandeur: 'Boubacar Balde',
      dateDemande: '15/11/2025',
      status: 'Validé',
    },
    {
      numero: 7032,
      type: "Demande d'attribution de site",
      sousType: "Pharmacie Charo",
      demandeur: 'Gerald Charo',
      dateDemande: '10/07/2024',
      status: 'Validé',
    },
  ];

  constructor(private router: Router) {}

  getStatusSeverity(status: DemandeStatus): 'success' | 'warn' | 'danger' {
    switch (status) {
      case 'Validé':
        return 'success';
      case 'En attente':
        return 'warn';
      case 'Rejeté':
        return 'danger';
    }
  }

  onStatusChange(): void {
    // Le filtre est appliqué dans le template via la référence de table (dt)
  }

  onView(row: DemandeRow): void {
    console.log('Voir demande', row);
    // TODO: router vers une page de détails quand elle existe
  }

  onEdit(row: DemandeRow): void {
    console.log('Éditer demande', row);
    // TODO: router vers une page d’édition quand elle existe
  }

  onDownload(row: DemandeRow): void {
    console.log('Télécharger demande', row);
    // TODO: déclencher un téléchargement (PDF, etc.)
  }
}
