import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-fabricant',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
    FileUploadModule,
    ButtonModule
  ],
  templateUrl: './ajouter-fabricant.html',
  styleUrl: './ajouter-fabricant.scss',
})
export class AjouterFabricant {
  fabricantForm: FormGroup;
  selectedFile: File | null = null;

  typeActiviteOptions = [
    { label: 'Fabrication de médicaments', value: 'fabrication' },
    { label: 'Importation', value: 'importation' },
    { label: 'Distribution', value: 'distribution' },
    { label: 'Autre', value: 'autre' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.fabricantForm = this.fb.group({
      nomEntreprise: ['', [Validators.required]],
      typeActivite: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      numeroEnregistrement: ['', [Validators.required]],
      nomResponsable: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onFileSelect(event: any) {
    if (event.files && event.files.length > 0) {
      this.selectedFile = event.files[0];
    }
  }

  onFileRemove() {
    this.selectedFile = null;
  }

  onSubmit() {
    if (this.fabricantForm.valid) {
      const formData = {
        ...this.fabricantForm.value,
        licenceFile: this.selectedFile
      };
      console.log('Données du formulaire:', formData);
      // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
      // Exemple: this.fabricantService.createFabricant(formData).subscribe(...)
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.fabricantForm.controls).forEach(key => {
        this.fabricantForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.router.navigate(['/back-office/direction/fabricants']);
  }
}
