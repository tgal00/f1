export interface RaceResult {
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
  round: string;
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
  Results?: (ResultsEntity)[] | null;
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
export interface ResultsEntity {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}
export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
export interface Time {
  millis: string;
  time: string;
}
export interface FastestLap {
  rank: string;
  lap: string;
  Time: Time1;
  AverageSpeed: AverageSpeed;
}
export interface Time1 {
  time: string;
}
export interface AverageSpeed {
  units: string;
  speed: string;
}
