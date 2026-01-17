import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder, // Ensures values don't accidentally become null
  Validators,
  ReactiveFormsModule,
  FormArray,
  FormGroup
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './customereditdialog.html'
})
export class Customereditdialog implements OnInit {

  private fb = inject(NonNullableFormBuilder);
  private dialogRef = inject(MatDialogRef<Customereditdialog>);
  public customer = inject(MAT_DIALOG_DATA);


  readonly editForm = this.fb.group({
    customerId: [''],
    name: ['', Validators.required],
    contactPerson: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    alternatePhone: [''],
    billingAddress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      country: ['']
    }),
    shippingAddresses: this.fb.array<FormGroup>([]),
    paymentTerms: ['Net 30'],
    taxNumber: [''],
    preferredCurrency: ['USD'],
    creditLimit: [0],
    customerType: ['Company'],
    priority: ['Medium'],
    specialInstructions: [''],
    status: ['Active']
  });

  get shippingAddresses(): FormArray {
    return this.editForm.controls.shippingAddresses;
  }

  ngOnInit(): void {
    if (this.customer) {
      this.populateForm(this.customer);
    }
  }

  private populateForm(customer: any): void {
   
    this.editForm.patchValue(customer);


    if (customer.shippingAddresses?.length) {
      customer.shippingAddresses.forEach((addr: any) => {
        this.addShippingAddress(addr);
      });
    }
  }

  addShippingAddress(data?: any): void {
    const addressGroup = this.fb.group({
      label: [data?.label || '', Validators.required],
      street: [data?.street || ''],
      city: [data?.city || ''],
      state: [data?.state || ''],
      zip: [data?.zip || ''],
      country: [data?.country || '']
    });
    this.shippingAddresses.push(addressGroup);
  }

  removeShippingAddress(index: number): void {
    this.shippingAddresses.removeAt(index);
  }

  save(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.getRawValue());
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}