import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { aircraftService } from 'src/app/services/master/aircraft/aircraft.service';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class aircraftsComponent implements OnInit {
  aircraft: any = [];

  displayedColumns: string[] = [
    'aircraft_name',
    'remarks',
    'view'
  ];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private aircraftService: aircraftService) { }


  ngAfterViewInit(): void {
    this.aircraftService.getaircraft().subscribe(aircraft => this.aircraft = aircraft);
    this.aircraft.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.aircraftService.getaircraft().subscribe((aircraft) => {
      console.log(aircraft);
      this.aircraft = aircraft;
    });
  }
  createTask(aircraft: any) {
    this.aircraftService
      .addaircraft(aircraft)
      .subscribe((aircraft: any) => {
        this.aircraft = [...this.aircraft, aircraft[0]];
      });
  }

  updateaircraft(aircraft: any) {
    this.aircraftService
      .updateaircraft(aircraft.aircraft, aircraft.id)
      .subscribe((updated: any) => {
        console.log(updated)
        const newaircrafts = this.aircraft.map((aircraft: any) => {
          if (aircraft.material_aircraft_id === updated[0].material_aircraft_id) {
            return updated[0];
          }
          return aircraft;
        });
        this.aircraft = newaircrafts;
      });
  }

}
