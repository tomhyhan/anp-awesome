import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {fileattachService}from 'src/app/services/purchase/fileattach/fileattach.service'
import { DetailService } from 'src/app/services/purchase/detail.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-fileattach',
  templateUrl: './fileattach.component.html',
  styleUrls: ['./fileattach.component.css']
})
export class FileattachComponent implements OnInit {
  filelist:any;
  user:any;
  fileattachform: FormGroup;
  details = [];
  detailSubscription: Subscription;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private fileattachService: fileattachService,
    private detailService: DetailService,) {
    this.authService.employee.subscribe(
      (employee) => (this.user = employee)
    );
    this.detailService.getAllDetail().subscribe((detail) => {
      this.details = detail;
    });
    this.detailSubscription = this.detailService.detail.subscribe((detail) => {
      this.details = detail;
      console.log(detail);
    });
    
   }

  ngOnInit(): void {
    this.filelist={
      ewaybill:[],
      invoice:[],
      other:[]
    };
    this.fileattachform = this.formBuilder.group({
      detail_id:"",
      ewaybill: [],
      invoice: [],
      other:[],
      
    });
  }


  onChangeFile(event) {
    // const file: File = event.target.files[0];
    let name=event.target.id
    for(let i =0; i<event.target.files.length;i ++){
      // console.log(event.target.files[i].name);
      this.filelist[name].push(event.target.files[i].name)
    }
    
    // const formData: FormData = new FormData();
    // formData.append('file', file, file.name);
   
  }

  onSubmit() {

    const files = {
      files: {
        ewaybill:this.filelist["ewaybill"],
        invoice:this.filelist["invoice"],
        other:this.filelist["other"],
        detail_id:this.fileattachform.value.detail_id,
        created_by:this.user.emp_id,
      },
    };
    // console.log(files);
    this.fileattachService.postfiles(files).subscribe();
    
  }
}
