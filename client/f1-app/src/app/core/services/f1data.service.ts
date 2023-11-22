import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { RaceResult } from "../model/raceResult.model";
import { RaceSchedule } from "../model/raceSchedule.model";
import { DriverStanding } from "../model/driverStanding.model";
import { ConstructorStanding } from "../model/constructorStanding.model";

@Injectable({
  providedIn: 'root'
})
export class F1DataService{

  constructor(protected http: HttpClient){}

  public getRaceSchedule(year: number){
    return this.http.get<RaceSchedule>(`http://ergast.com/api/f1/${year}.json`)
    .pipe(tap(res => res.MRData.RaceTable.Races?.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())));
  }

  public getRaceResultByYearAndRound(year:number, round: string){
    return this.http.get<RaceResult>(`http://ergast.com/api/f1/${year}/${round}/results.json`);
  }

  public getDriverStanding(year: number){
    return this.http.get<DriverStanding>(`http://ergast.com/api/f1/${year}/driverStandings.json`)
  }

  public getConstructorStanding(year: number){
    return this.http.get<ConstructorStanding>(`http://ergast.com/api/f1/${year}/constructorStandings.json`)
  }

}