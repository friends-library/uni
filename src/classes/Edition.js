// @flow
import Format from './Format';
import Chapter from './Chapter';
import Document from './Document';
import Audio from './Audio';

type EditionType = 'original' | 'updated' | 'modernized';

export default class Edition {
  type: EditionType = 'original';
  pages: number = 0;
  formats: Array<Format> = [];
  chapters: Array<Chapter> = [];
  audio: ?Audio;
  document: Document;

  constructor(
    type: EditionType = 'original',
    pages: number = 0,
    formats: Array<Format> = [],
    chapters: Array<Chapter> = [],
    audio: ?Audio = null,
  ) {
    this.type = type;
    this.pages = pages;
    this.formats = formats;
    this.chapters = chapters;
    this.audio = audio;
  }

  toJSON(): Edition {
    delete this.document;
    return this;
  }
}
