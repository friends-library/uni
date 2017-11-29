// @flow
import Format from './Format';
import Chapter from './Chapter';
import Document from './Document';

type EditionType = 'original' | 'updated' | 'modernized';

export default class Edition {
  type: EditionType = 'original';
  pages: number = 0;
  formats: Array<Format> = [];
  chapters: Array<Chapter> = [];
  document: Document;

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

  toJSON(): Edition {
    delete this.document;
    return this;
  }
}
