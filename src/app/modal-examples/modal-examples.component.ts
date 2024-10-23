import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-modal-examples',
  standalone: true,
  imports: [CommonModule, DynamicModalComponent, FormModalComponent],
  templateUrl: './modal-examples.component.html',
  styleUrls: ['./modal-examples.component.scss']
})
export class ModalExamplesComponent {
  @ViewChild('basicModal') basicModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('dynamicModal') dynamicModal!: DynamicModalComponent;
  @ViewChild('formModal') formModal!: FormModalComponent;

  dynamicContent = 'This content can be changed dynamically!';

  openBasicModal() {
    this.basicModal.nativeElement.showModal();
  }

  openDynamicModal() {
    this.dynamicModal.openModal();
  }

  openFormModal() {
    this.formModal.openModal();
  }

  closeModal(modal: HTMLDialogElement) {
    modal.close();
  }

  onFormModalClosed(result: { action: 'submitted' | 'canceled'; data?: { name: string; email: string } }) {
    console.log('Form modal closed:', result.action);
    if (result.action === 'submitted' && result.data) {
      console.log('Form submitted:', result.data);
    }
  }
}
