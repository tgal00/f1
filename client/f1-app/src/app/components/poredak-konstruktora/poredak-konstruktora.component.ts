import { Component } from '@angular/core';
import { ConstructorStanding, ConstructorStandingsEntity } from 'src/app/core/model/constructorStanding.model';
import { DriverStandingsEntity } from 'src/app/core/model/driverStanding.model';
import { F1DataService } from 'src/app/core/services/f1data.service';

@Component({
  selector: 'app-poredak-konstruktora',
  templateUrl: './poredak-konstruktora.component.html',
  //styleUrls: ['../../../assets/styles/poredak-vozaca.component.scss']
})
export class PoredakKonstruktoraComponent {

  public constructorStandingList: ConstructorStandingsEntity[] = [];

  public raceYear: number = 2023;

  loading: boolean = false;


  displayedColumns: string[] = ['position', 'points', 'wins', 'constructor',];

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

  public loadRaceSchedule() {
    this.f1DataService.getConstructorStanding(this.raceYear).subscribe((res: ConstructorStanding) => {
      this.constructorStandingList = res.MRData.StandingsTable.StandingsLists![0].ConstructorStandings!;
      this.loading = false;
    });
  }

}
