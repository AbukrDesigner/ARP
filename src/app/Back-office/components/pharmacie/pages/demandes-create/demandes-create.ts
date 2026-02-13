import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
// import { CalendarModule } from 'primeng/calendar';
import type { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demandes-create',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    StepsModule,
    InputTextModule,
    SelectModule,
    // CalendarModule,
    ButtonModule,
    DialogModule
  ],
  templateUrl: './demandes-create.html',
  styleUrl: './demandes-create.scss',
})
export class DemandesCreate {
  activeIndex = 0;
  visible: boolean = false;
  openDialog(): void {
    this.visible = true;
  }
  closeDialog(): void {
    this.visible = false;
  }

  items: MenuItem[] = [
    { label: 'Officine actuelle' },
    { label: 'Titulaire' },
    { label: 'Nouvelle localisation' },
  ];

  identificationForm: FormGroup;
  titulaireForm: FormGroup;
  localisationForm: FormGroup;

  titulaireOptions = [
    { label: 'Nom du titulaire actuel', value: null },
    { label: 'Titulaire 1', value: 'titulaire1' },
    { label: 'Titulaire 2', value: 'titulaire2' },
  ];

  constructor(private fb: FormBuilder) {
    this.identificationForm = this.fb.group({
      numeroOrdre: ['', Validators.required],
      raisonSociale: ['', Validators.required],
      adresseCompleteActuelle: ['', Validators.required],
      titulaireActuel: [null, Validators.required],
      telephoneOfficine: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.titulaireForm = this.fb.group({
      nomComplet: ['', Validators.required],
      dateNaissance: [null, Validators.required],
      numeroOrdrePharmacien: ['', Validators.required],
      dateInscription: [null, Validators.required],
      diplomeObtenu: ['', Validators.required],
      anneeObtention: ['', Validators.required],
      qualite: [null, Validators.required],
    });

    this.localisationForm = this.fb.group({
      adresseNouveauLocal: ['', Validators.required],
      surfaceTotale: ['', Validators.required],
      typeZone: [null, Validators.required],
      statutProprietaire: [null, Validators.required],
      diplomeObtenu: ['', Validators.required],
      anneeObtention: ['', Validators.required],
      qualite: [null, Validators.required],
    });
  }

  onCancel(): void {
    // TODO: brancher avec la navigation réelle (par ex. router.navigate)
    this.identificationForm.reset();
    this.titulaireForm.reset();
    this.localisationForm.reset();
    this.activeIndex = 0;
  }

  onNext(): void {
    if (this.activeIndex === 0) {
      if (this.identificationForm.invalid) {
        this.identificationForm.markAllAsTouched();
        return;
      }
      this.activeIndex = 1;
      return;
    }

    if (this.activeIndex === 1) {
      if (this.titulaireForm.invalid) {
        this.titulaireForm.markAllAsTouched();
        return;
      }
      this.activeIndex = 2;
      return;
    }
  }

  // onSubmit(): void {
  //   if (this.localisationForm.invalid) {
  //     this.localisationForm.markAllAsTouched();
  //     return;
  //   }

  //   // TODO: implémenter l'envoi réel de la demande
  //   const payload = {
  //     identification: this.identificationForm.value,
  //     titulaire: this.titulaireForm.value,
  //     localisation: this.localisationForm.value,
  //   };
  //   console.log('Soumission de la demande', payload);
  // }

  onPrevious(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
