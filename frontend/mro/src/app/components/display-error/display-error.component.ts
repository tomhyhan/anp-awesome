import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.css'],
})
export class DisplayErrorComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;

  constructor() {}

  ngOnInit(): void {}
}
