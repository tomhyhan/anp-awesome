import { Component, OnInit } from '@angular/core';
import { aircraftService } from 'src/app/services/master/aircraft/aircraft.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css'],
})
export class aircraftsComponent implements OnInit {
  aircrafts: any = [];

  displayedColumns: string[] = [
    'demo-position',
    'aircraft_name',
    'remarks',
    'created_by',
    'demo-button',
  ];

  constructor(private aircraftService: aircraftService) {}

  ngOnInit(): void {
    this.aircraftService.getaircraft().subscribe((aircrafts) => {
      console.log(aircrafts);
      this.aircrafts = aircrafts;
    });
  }

  createTask(aircraft: any) {
    this.aircraftService
      .addaircraft(aircraft)
      .subscribe((aircraft: any) => {
        this.aircrafts = [...this.aircrafts, aircraft[0]];
      });
  }

  updateaircraft(aircraft: any) {
    this.aircraftService
      .updateaircraft(aircraft.aircraft, aircraft.id)
      .subscribe((updated: any) => {
        const newaircrafts = this.aircrafts.map((aircraft: any) => {
          if (aircraft.material_aircraft_id === updated[0].material_aircraft_id) {
            return updated[0];
          }
          return aircraft;
        });
        this.aircrafts = newaircrafts;
      });
  }
}
