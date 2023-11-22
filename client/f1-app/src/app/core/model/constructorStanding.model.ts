export interface ConstructorStanding {
  MRData: MRData;
}
export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  StandingsTable: StandingsTable;
}
export interface StandingsTable {
  season: string;
  round: string;
  StandingsLists?: (StandingsListsEntity)[] | null;
}
export interface StandingsListsEntity {
  season: string;
  round: string;
  ConstructorStandings?: (ConstructorStandingsEntity)[] | null;
}
export interface ConstructorStandingsEntity {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}
export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
