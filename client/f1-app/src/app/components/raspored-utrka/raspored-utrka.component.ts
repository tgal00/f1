import { Component } from '@angular/core';
import { RaceResult, ResultsEntity } from 'src/app/core/model/raceResult.model';
import { RaceSchedule, RaceTable } from 'src/app/core/model/raceSchedule.model';
import { F1DataService } from 'src/app/core/services/f1data.service';

@Component({
  selector: 'app-raspored-utrka',
  templateUrl: './raspored-utrka.component.html',
  styleUrls: ['../../../assets/styles/raspored-utrka.component.scss']
})
export class RasporedUtrkaComponent {

  public racesSchedule: RaceTable;
  public raceResultForYear: RaceResult[] = [];
  public raceResultDetail: RaceResult;
  public hasRaceResults: boolean = false;
  public raceResultsDetail: ResultsEntity[];
  displayedColumns: string[] = ['position', 'driver',  'points'];

  public raceYear: number = 2023;

  constructor(protected f1DataService: F1DataService) {
    this.loadRaceSchedule();
  }

  private loadRaceSchedule() {
    this.raceResultForYear = [];
    this.f1DataService.getRaceSchedule(this.raceYear).subscribe((res: RaceSchedule) => {
      this.racesSchedule = res.MRData.RaceTable;
      this.racesSchedule.Races?.forEach(r => {
        this.f1DataService.getRaceResultByYearAndRound(this.raceYear, r.round).subscribe(res => this.raceResultForYear.push(res))
      })
    });
  }

  public raceDateChecker(date: string) {
    return new Date(date) < new Date();
  }

  public getRaceWinnerForRound(round: string): string | null {
    let selectedRound = this.raceResultForYear.filter(r => r.MRData.RaceTable.round == round);
    if (selectedRound[0]?.MRData.RaceTable.Races?.length != null && selectedRound[0]?.MRData.RaceTable.Races?.length > 0) {
      let driver = selectedRound[0].MRData.RaceTable.Races[0].Results![0].Driver;
      return driver.givenName + " " + driver.familyName;
    }
    return null;
  }

  onYearSearch() {
    this.loadRaceSchedule();
    this.hasRaceResults = false;
  }

  onCardClick(round: any){
    this.raceResultDetail = this.raceResultForYear.filter(res => res.MRData.RaceTable.round == round)[0];
    if(this.raceResultDetail 
      && this.raceResultDetail.MRData.RaceTable.Races 
      && this.raceResultDetail.MRData.RaceTable.Races.length > 0 
      && this.raceResultDetail.MRData.RaceTable.Races[0].Results
      && this.raceResultDetail.MRData.RaceTable.Races[0].Results.length > 0)  {
        this.hasRaceResults = true
        this.raceResultsDetail = this.raceResultDetail.MRData.RaceTable.Races[0].Results;
      }
  }

  validRaceYear() {
    return /^\d{4}$/.test(this.raceYear.toString());
  }

  public onRaceDetailClose(){
    this.raceResultsDetail = [];
    this.hasRaceResults = false;
  }

  public sortSchedule(asc: boolean){
    if(asc){
      this.racesSchedule.Races?.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else {
      this.racesSchedule.Races?.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
  }
}
