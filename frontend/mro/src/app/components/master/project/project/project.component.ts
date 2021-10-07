import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Output() onUpdateproject = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  updateproject(project: any) {
    this.onUpdateproject.emit(project);
  }

}
