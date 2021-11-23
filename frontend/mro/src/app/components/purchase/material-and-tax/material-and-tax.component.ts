import { MaterialTaxService } from './../../../services/purchase/materialTax/material-tax.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SparePartService } from 'src/app/services/master/sparePart/spare-part.service';
import { DetailService } from 'src/app/services/purchase/detail.service';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { UomService } from 'src/app/services/master/Uom/uom.service';
import { projectService } from 'src/app/services/master/project/project.service';
@Component({
  selector: 'app-material-and-tax',
  templateUrl: './material-and-tax.component.html',
  styleUrls: ['./material-and-tax.component.css'],
})
export class MaterialAndTaxComponent implements OnInit {
  addMaterialsAndTax: FormGroup;
  searchSparePart: FormGroup;
  items: FormArray;
  spareParts;
  details = [];
  detailSubscription: Subscription;
  user;
  errorhandlers: ErrorHandlers;
  item: FormGroup;
  uoms = [];
  projects = [];
  projectSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private sparePartservice: SparePartService,
    private detailService: DetailService,
    private materialTaxService: MaterialTaxService,
    private uomService: UomService,
    private projectService: projectService
  ) {
    this.authService.employee.subscribe((employee) => (this.user = employee));
    this.detailService.getAllDetail().subscribe((detail) => {
      this.details = detail;
    });
    this.detailSubscription = this.detailService.detail.subscribe((detail) => {
      this.details = detail;
    });
    this.uomService.getUomPartforservice().subscribe((uom: any) => {
      this.uoms = uom;
    });
    this.projectService
      .getAllproject()
      .subscribe((projects) => (this.projects = projects));
    this.projectSubscription = this.projectService.project.subscribe(
      (projects) => {
        this.projects = projects;
      }
    );
  }

  ngOnInit(): void {
    this.searchSparePart = this.formBuilder.group({
      filter: '',
    });
    this.addMaterialsAndTax = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
    this.items = this.addMaterialsAndTax.get('items') as FormArray;
  }

  createItem(): FormGroup {
    this.item = this.formBuilder.group({
      material_code: [{ value: '', disabled: true }],
      material_description: [{ value: '', disabled: true }],
      make: '',
      delivery_date: ['', Validators.required],
      account_assignment: '',
      cost_center: '',
      plant: '',
      quantity: '',
      unit: '',
      rate: '',
      dics: [null],
      disc_amount: [null],
      total_amount: [{ value: '', disabled: true }, Validators.required],
      sp_no: '',
    });
    this.errorhandlers = new ErrorHandlers(this.item);
    return this.item;
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
    const discountAmount = quantity * rate * (discountPercent / 100);
    const total = quantity * rate * (1 - discountPercent / 100);
    this.items.controls[index].get('total_amount').setValue(total);
    this.items.controls[index].get('disc_amount').setValue(discountAmount);
  }

  addItemAtEnd() {
    this.items.push(this.createItem());
  }

  onSubmit() {
    const materialTaxToSubmit = this.items.getRawValue().map((item) => {
      return {
        ...item,
        created_by: this.user.emp_id,
        dics: item.dics || null,
        disc_amount: item.disc_amount || null,
      };
    });
    console.log(materialTaxToSubmit);
    this.materialTaxService.addMaterialTax(materialTaxToSubmit).subscribe();
    this.item.reset();
  }

  onSearchSparePart() {
    const filter = {
      spare_part_code: this.searchSparePart.value.filter,
    };
    this.sparePartservice
      .getSparePart(JSON.stringify(filter), 0, Math.pow(2, 50))
      .subscribe((spareParts) => {
        this.spareParts = spareParts[0];
      });
  }

  setSparePart(index) {
    this.items.controls[index]
      .get('material_code')
      .setValue(this.spareParts.spare_part_code);
    this.items.controls[index]
      .get('material_description')
      .setValue(this.spareParts.spare_part_desc);
    this.items.controls[index]
      .get('sp_no')
      .setValue(this.spareParts.material_master_id);
    this.searchSparePart.reset();
    document.getElementById(`search-btn${index}`).click();
    this.spareParts = null;
  }
}
