import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
// import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-signalement-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    // CalendarModule,
  ],
  templateUrl: './signalement-create.html',
  styleUrl: './signalement-create.scss',
})
export class SignalementCreate {
  signalementForm: FormGroup;

  typeProblemeOptions = [
    { label: 'Quel type de problème signalez-vous ?', value: null },
    { label: 'Qualité du produit', value: 'qualite_produit' },
    { label: 'Effet indésirable', value: 'effet_indesirable' },
    { label: 'Autre', value: 'autre' },
  ];

  qualiteOptions = [
    { label: 'Propriétaire', value: 'proprietaire' },
    { label: 'Gérant', value: 'gerant' },
    { label: 'Associé', value: 'associe' },
    { label: 'Autre', value: 'autre' },
  ];

  constructor(private fb: FormBuilder) {
    this.signalementForm = this.fb.group({
      typeProbleme: [null, Validators.required],
      dateNaissance: [null, Validators.required],
      numeroOrdrePharmacien: ['', Validators.required],
      dateInscription: [null, Validators.required],
      diplomeObtenu: ['', Validators.required],
      anneeObtention: ['', Validators.required],
      qualite: [null, Validators.required],
    });
  }

  onCancel(): void {
    this.signalementForm.reset();
  }

  onNext(): void {
    if (this.signalementForm.invalid) {
      this.signalementForm.markAllAsTouched();
      return;
    }

    // TODO: navigation vers l'étape suivante ou soumission réelle
    console.log('Signalement étape 1 validé', this.signalementForm.value);
  }
}
