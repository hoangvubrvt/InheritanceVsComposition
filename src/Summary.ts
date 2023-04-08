import { type MatchData } from './MatchData'
import { WinAnalysis } from './analyzers/WinAnalyzer'
import { HtmlReport } from './reports/HtmlReport'
import { ConsoleReport } from "./reports/ConsoleReport"

export interface Analyzer {
  run: (matches: MatchData[]) => string
}

export interface OutputTarget {
  print: (report: string) => void
}

export class Summary {
  static winsAnalysisWithHtmlReport (teamName: string): Summary {
    return new Summary(
      new WinAnalysis(teamName),
      new HtmlReport()
    )
  }

  static winsAnalysisWithConsoleReport (teamName: string): Summary {
    return new Summary(
      new WinAnalysis(teamName),
      new ConsoleReport()
    )
  }

  constructor (
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  buildAndPrintReport (matchData: MatchData[]): void {
    const data = this.analyzer.run(matchData)
    this.outputTarget.print(data)
  }
}
