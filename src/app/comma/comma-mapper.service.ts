import {Injectable} from '@angular/core';
import {SeparateTextWord, SeparateTextSeparator} from '../models';

const OPTIONAL_COMMA_DESIGNATOR = `[,]`

@Injectable({
  providedIn: 'root'
})
export class CommaMapperService {

  constructor() {
  }

  mapTextToArray(text: string): SeparateTextWord[] {
    const tokens = text.split(' ');
    const mappedTokens = tokens.map(token => {
      const hasOptionalComma = token.split('').slice(-3).join('') === OPTIONAL_COMMA_DESIGNATOR;
      const hasComma = token[token.length - 1] === ',';

      let separator: SeparateTextSeparator;
      let word: string;

      if (hasOptionalComma) {
        separator = SeparateTextSeparator.OPTIONAL_COMMA;
        word = token.replace(OPTIONAL_COMMA_DESIGNATOR, '');
      } else if (hasComma) {
        separator = SeparateTextSeparator.COMMA;
        word = token.replace(',', '');
      } else {
        separator = SeparateTextSeparator.NONE;
        word = token;
      }

      const wordWithCompetence = this.extractCompetenceFromWord(word);

      return {
        separatorRight: separator,
        text: wordWithCompetence.word,
        competence: wordWithCompetence.competence
      };
    });
    return mappedTokens;
  }

  private extractCompetenceFromWord(word: string) {
    const competenceRegex = /\{(.*?)\}/;
    const match = competenceRegex.exec(word);
    return {
      word: word.replace(competenceRegex, ''),
      competence: match != null ? match[1] : null 
    }
  }

  mapArrayToText(separatedWords: SeparateTextWord[]): string {
    return separatedWords.map(word => {
      let wordPlusSeparator = '';
      if (word.separatorRight === SeparateTextSeparator.COMMA) {
        wordPlusSeparator = word.text + ',';
      } else if (word.separatorRight === SeparateTextSeparator.NONE) {
        wordPlusSeparator = word.text;
      } else {
        wordPlusSeparator = word.text + OPTIONAL_COMMA_DESIGNATOR;
      }
      return wordPlusSeparator;
    }).join(' ');
  }

}
