import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-demande-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './demande-create.html',
  styleUrl: './demande-create.scss',
})
export class DemandeCreate {
  form: FormGroup;

  isRcpDragOver = false;
  isNoticeDragOver = false;
  isImageDragOver = false;

  therapeuticClasses = [
    { label: 'Classe thérapeutique', value: null },
    { label: 'Antalgique', value: 'antalgique' },
    { label: 'Antibiotique', value: 'antibiotique' },
    { label: 'Anti-inflammatoire', value: 'anti_inflammatoire' },
  ];

  galenicForms = [
    { label: 'Forme galénique', value: null },
    { label: 'Comprimé', value: 'comprime' },
    { label: 'Gélule', value: 'gelule' },
    { label: 'Solution buvable', value: 'solution_buvable' },
  ];

  administrationRoutes = [
    { label: "Voie d'administration", value: null },
    { label: 'Orale', value: 'orale' },
    { label: 'Intraveineuse', value: 'iv' },
    { label: 'Sous-cutanée', value: 'sc' },
  ];

  laboratories = [
    { label: 'Laboratoire', value: null },
    { label: 'Laboratoire A', value: 'lab_a' },
    { label: 'Laboratoire B', value: 'lab_b' },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      drugName: ['', Validators.required],
      dci: ['', Validators.required],
      dosage: ['', Validators.required],
      conditioning: [''],
      therapeuticClass: [null],
      publicPrice: [''],
      galenicForm: [null],
      administrationRoute: [null],
      laboratory: [null],
      startDate: [null],
      rcp: [null, Validators.required],
      notice: [null, Validators.required],
      productImage: [null],
    });
  }

  private setFile(controlName: 'rcp' | 'notice' | 'productImage', file: File | null): void {
    this.form.patchValue({ [controlName]: file });
    const control = this.form.get(controlName);
    control?.markAsDirty();
    control?.updateValueAndValidity();
  }

  onFileDragOver(event: DragEvent, type: 'rcp' | 'notice' | 'image'): void {
    event.preventDefault();
    if (type === 'rcp') {
      this.isRcpDragOver = true;
    } else if (type === 'notice') {
      this.isNoticeDragOver = true;
    } else {
      this.isImageDragOver = true;
    }
  }

  onFileDragLeave(event: DragEvent, type: 'rcp' | 'notice' | 'image'): void {
    event.preventDefault();
    if (type === 'rcp') {
      this.isRcpDragOver = false;
    } else if (type === 'notice') {
      this.isNoticeDragOver = false;
    } else {
      this.isImageDragOver = false;
    }
  }

  onRcpChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.setFile('rcp', file);
  }

  onNoticeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.setFile('notice', file);
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.setFile('productImage', file);
  }

  onRcpDrop(event: DragEvent): void {
    event.preventDefault();
    this.isRcpDragOver = false;
    const file = event.dataTransfer?.files?.[0] ?? null;
    if (file) {
      this.setFile('rcp', file);
    }
  }

  onNoticeDrop(event: DragEvent): void {
    event.preventDefault();
    this.isNoticeDragOver = false;
    const file = event.dataTransfer?.files?.[0] ?? null;
    if (file) {
      this.setFile('notice', file);
    }
  }

  onImageDrop(event: DragEvent): void {
    event.preventDefault();
    this.isImageDragOver = false;
    const file = event.dataTransfer?.files?.[0] ?? null;
    if (file) {
      this.setFile('productImage', file);
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // À adapter pour appeler le service API de création
    console.log('Demande soumise', this.form.value);
  }

  cancel(): void {
    this.form.reset();
  }
}
