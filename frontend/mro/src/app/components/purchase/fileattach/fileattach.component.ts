import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fileattach',
  templateUrl: './fileattach.component.html',
  styleUrls: ['./fileattach.component.css']
})
export class FileattachComponent implements OnInit {
  fileToUpload: File = null;
  fileattachform: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fileattachform = this.formBuilder.group({
      ewaybill: [],
      invoice: [],
      other:[],
    });
  }

  // handleFileInput(files: FileList) {

  //   this.fileToUpload = files.item(0);
    
  //   }


  onSubmit() {
    const files = {
      files: {
        ewaybill:this.fileattachform.value.ewaybill,
        invoice:this.fileattachform.value.invoice,
        other:this.fileattachform.value.other,
        detail_id:1
      },
    };

    console.log(files)
  }
  // uploadFileToActivity() {
  //     this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //       // 上传成功处理
  //       }, error => {
  //         console.log(error);
  //       });
  // }
}
