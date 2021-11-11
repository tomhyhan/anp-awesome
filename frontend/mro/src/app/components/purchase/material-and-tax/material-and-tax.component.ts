import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-material-and-tax',
  templateUrl: './material-and-tax.component.html',
  styleUrls: ['./material-and-tax.component.css'],
})
export class MaterialAndTaxComponent implements OnInit {
  addMaterialsAndTax: FormGroup;
  items: FormArray;
  displayedColumns: string[] = ["Material Code",	"Description", "Make", "Delivery Date",	
  "Account Assignment", "Cost Center", "Plant", "Quantity", "Unit", "Rate", "Discount %",
  "Discoumt Amount", "Total Amount", " ", " "];

  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addMaterialsAndTax = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
    this.items = this.addMaterialsAndTax.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      material_code: '',
      material_description: '',
      make: '',
      delivery_date: '',
      accout_assignment: '',
      cost_center: '',
      plant: '',
      quantity: '',
      unit: '',
      rate: '',
      dics: '',
      disc_amount: '',
      total_amount: [{ value: '', disabled: true }, Validators.required],
    });
  }

  addItem(index) {
    this.items.insert(index + 1, this.createItem());
  }

  removeItem(index) {
    this.items.removeAt(index);
  }

  onChange(index) {
    const quantity = this.items.getRawValue()[index].quantity || 0;
    const rate = this.items.getRawValue()[index].rate || 0;
    const discountPercent = this.items.getRawValue()[index].dics || 0;
    const discountAmount = this.items.getRawValue()[index].disc_amount || 0;
    // console.log(quantity * rate * (1 - discountPercent / 100) - discountAmount);
    const total =
      quantity * rate * (1 - discountPercent / 100) - discountAmount;
    this.items.controls[index].get('total_amount').setValue(total);
  }

  addItemAtEnd() {
    this.items.push(this.createItem());
  }
}
