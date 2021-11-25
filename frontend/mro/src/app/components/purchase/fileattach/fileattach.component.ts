import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {fileattachService}from 'src/app/services/purchase/fileattach/fileattach.service'
@Component({
  selector: 'app-fileattach',
  templateUrl: './fileattach.component.html',
  styleUrls: ['./fileattach.component.css']
})
export class FileattachComponent implements OnInit {
  filelist:any;
  user:any;
  fileattachform: FormGroup;
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private fileattachService: fileattachService,) {
    this.authService.employee.subscribe(
      (employee) => (this.user = employee)
    );
   }

  ngOnInit(): void {
    this.filelist={
      ewaybill:[],
      invoice:[],
      other:[]
    };
    this.fileattachform = this.formBuilder.group({
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
    // const files = {
    //   files: {
    //     ewaybill:this.fileattachform.value.ewaybill,
    //     invoice:this.fileattachform.value.invoice,
    //     other:this.fileattachform.value.other,
    //     detail_id:1
    //   },
    // };

    // console.log(this.user)
    const files = {
      files: {
        ewaybill:this.filelist["ewaybill"],
        invoice:this.filelist["invoice"],
        other:this.filelist["other"],
        detail_id:1,
        created_by:this.user.emp_id,
      },
    };
    // console.log(files);
    this.fileattachService.postfiles(files).subscribe();
    
  }
}
