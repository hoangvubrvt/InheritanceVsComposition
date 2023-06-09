import { type Analyzer } from '../Summary'
import { type MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'

export class WinAnalysis implements Analyzer {
  constructor (public teamName: string) {
  }

  run (matches: MatchData[]): string {
    let wins = 0
    for (const match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `${this.teamName} won ${wins} games`
  }
}
