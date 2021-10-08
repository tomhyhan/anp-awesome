import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-err',
  templateUrl: './display-err.component.html',
  styleUrls: ['./display-err.component.css'],
})
export class DisplayErrComponent implements OnInit {
  @Input() errorMsg!: string;
  @Input() displayError!: boolean;
  constructor() {}

  ngOnInit(): void {}
}