import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ModalResult {
  action: 'submitted' | 'canceled';
  data?: { name: string; email: string };
}

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent {
  @ViewChild('formModal') modal!: ElementRef<HTMLDialogElement>;
  @Output() modalClosed = new EventEmitter<ModalResult>();

  formData = { name: '', email: '' };

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal(action: 'submitted' | 'canceled') {
    this.modal.nativeElement.close();
    const result: ModalResult = { action };
    if (action === 'submitted') {
      result.data = { ...this.formData };
    } else {
      this.formData = { name: '', email: '' };
    }
    this.modalClosed.emit(result);
  }

  submitForm() {
    this.closeModal('submitted');
  }

  get isFormValid(): boolean {
    return this.formData.name.trim() !== '' && this.formData.email.trim() !== '';
  }
}
