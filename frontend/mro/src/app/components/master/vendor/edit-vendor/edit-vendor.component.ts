import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  @Output() onUpdateVendor = new EventEmitter();
  @Input() vendor: any;
  vendorForm!: FormGroup;
  id: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vendorForm = this.formBuilder.group({
      vendorName: '',
      vendorCode: '',
      vendorContact:'',
      vendorAddress:'',
    });
    this.updateValues();
  }

  updateValues() {
    this.vendorForm.patchValue({
      vendorName: this.vendor.vendor_name,
      vendorCode: this.vendor.vendor_code,
      vendorContact: this.vendor.contact,
      vendorAddress: this.vendor.address,
    });
  }

  // probably better use router
  onSubmit() {
    console.log(this.vendor.vendorName);
    const updateVendor = {
      vendor: {
        vendor_name: this.vendorForm.value.vendorName,
        vendor_code: this.vendorForm.value.vendorCode,
        contact: this.vendorForm.value.vendorContact,
        address: this.vendorForm.value.vendorAddress,
        remarks:"new",
        created_by:"hosung"
      },
    };
    
    this.onUpdateVendor.emit({
      vendor: updateVendor,
      id: this.vendor.vendor_id,
    });
  }

}
