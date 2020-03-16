import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1;
  }

  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man Utd has won ${manUnitedWins} games`);
