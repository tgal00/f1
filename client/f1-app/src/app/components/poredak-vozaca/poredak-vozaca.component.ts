import { Component } from '@angular/core';
import { DriverStanding, DriverStandingsEntity } from 'src/app/core/model/driverStanding.model';
import { F1DataService } from 'src/app/core/services/f1data.service';

@Component({
  selector: 'app-poredak-vozaca',
  templateUrl: './poredak-vozaca.component.html',
  //styleUrls: ['../../../assets/styles/poredak-vozaca.component.scss']
})
export class PoredakVozacaComponent {

  public driverStandingList: DriverStandingsEntity[] = [];

  public raceYear: number = 2023;

  loading: boolean = false;


  displayedColumns: string[] = ['position', 'points', 'driver', 'constructor', 'wins'];

  constructor(protected f1DataService: F1DataService) {
    this.loadRaceSchedule();
  }

  validRaceYear() {
    return /^\d{4}$/.test(this.raceYear.toString());
  }

  onYearSearch() {
    this.loading = true;
    this.loadRaceSchedule();
  }

  public loadRaceSchedule(){
    this.f1DataService.getDriverStanding(this.raceYear).subscribe((res: DriverStanding) => {
      this.driverStandingList = res.MRData.StandingsTable.StandingsLists![0].DriverStandings!;
      this.loading = false;
    });
  }

}
