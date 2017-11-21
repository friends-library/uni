// @flow
import Format from './Format';
import Chapter from './Chapter';

type EditionType = 'original' | 'updated' | 'modernized';

export default class Edition {
  type: EditionType = 'original';
  pages: number = 0;
  formats: Array<Format> = [];
  chapters: Array<Chapter> = [];

  constructor(
    type: EditionType = 'original',
    pages: number = 0,
    formats: Array<Format> = [],
    chapters: Array<Chapter> = [],
  ) {
    this.type = type;
    this.pages = pages;
    this.formats = formats;
    this.chapters = chapters;
  }
}
