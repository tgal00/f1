export interface RaceSchedule {
  MRData: MRData1;
}
export interface MRData1 {
  xmlns: string;
  series: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}
export interface RaceTable {
  season: string;
  Races?: (RacesEntity)[] | null;
}
export interface RacesEntity {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: FirstPracticeOrSecondPracticeOrThirdPracticeOrQualifying;
  SecondPractice: FirstPracticeOrSecondPracticeOrThirdPracticeOrQualifying;
  ThirdPractice: FirstPracticeOrSecondPracticeOrThirdPracticeOrQualifying;
  Qualifying: FirstPracticeOrSecondPracticeOrThirdPracticeOrQualifying;
}
export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}
export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
export interface FirstPracticeOrSecondPracticeOrThirdPracticeOrQualifying {
  date: string;
  time: string;
}
