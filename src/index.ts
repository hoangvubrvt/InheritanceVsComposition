import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const csvFileReader = new MatchReader('football.csv');
csvFileReader.read();

const summary = Summary.winsAnalysisWithConsoleReport('Man United');
summary.buildAndPrintReport(csvFileReader.data);

