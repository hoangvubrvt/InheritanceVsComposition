import fs from 'fs'

export abstract class CsvFileReader<T> {
  data: T[] = []

  abstract mapRow (row: string[]): T

  constructor (protected fileName: string) {}

  read (): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map(row => row.split(','))
      .map((row: string[]): any => this.mapRow(row))
  }
}
