import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlers } from 'src/app/utils/error-handler';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/model/auth';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  user:AuthData;
  // Remarks:any;
  @Output() onCreateVendor = new EventEmitter();
  addvendorForm: FormGroup;
  errorhandlers: ErrorHandlers;


  constructor(private formBuilder: FormBuilder,private authService: AuthService) { 
    this.authService.employee.subscribe(
    (employee) => (this.user = employee)
    )
  }

  ngOnInit(): void {

    // console.log(new Date().toLocaleDateString().replace('/','-').replace('/','-'))
    this.addvendorForm = this.formBuilder.group({
      vendor_code: ['', Validators.required],
      vendor_name: ['', Validators.required],
      contact:['', Validators.required],
      address:['', Validators.required],
      remarks:[''],
    });
    this.errorhandlers = new ErrorHandlers(this.addvendorForm);
  }
  
  onSubmit() {
    if (this.addvendorForm.valid) {
      const vendor = {
        vendor: {
          vendor_code: this.addvendorForm.value.vendor_code,
          vendor_name: this.addvendorForm.value.vendor_name,
          contact: this.addvendorForm.value.contact,
          address: this.addvendorForm.value.address,
          remarks: this.addvendorForm.value.remarks,

          created_by:this.user.emp_id,
        },
      };
      console.log(vendor)
      this.onCreateVendor.emit(vendor);
      this.addvendorForm.reset();
      
  } else {
    this.errorhandlers.showErrors();
  }};

}
