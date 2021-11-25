import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { aircraftService } from 'src/app/services/master/aircraft/aircraft.service';
import { startWith, tap } from 'rxjs/operators';
import { aircraft,aircraftFilter } from 'src/app/model/aircraft';

type Filter = string | aircraftFilter;
@Component({
  selector: 'app-aircraft',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class aircraftsComponent implements OnInit {
  aircraft: aircraft[];
  displayedColumns: string[] = [
    'aircraft_name',
    'remarks',
    'view'
  ];
  aircraftCount: any;
  filter:Filter = JSON.stringify('');
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private aircraftService: aircraftService) { }


  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.aircraftService
            .getaircraft(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((aircraft) => {
              this.aircraft = aircraft;
            })
        )
      )
      .subscribe(() => {});
  }

  ngOnInit(): void {
    this.aircraftService.getaircraftCount().subscribe((count) => {
      this.aircraftCount = count;
    })
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
  searchaircraft(filter: any) {
    console.log(filter);
    this.aircraftService.getaircraftFilterCount(filter).subscribe((count) => {
      this.aircraftCount = count;
    });
    this.filter = filter;
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() =>
          this.aircraftService
            .getaircraft(
              this.filter,
              this.paginator.pageIndex,
              this.paginator.pageSize
            )
            .subscribe((aircraft) => {
              this.aircraft = aircraft;
            })
        )
      )
      .subscribe(() => {});
  }
}
