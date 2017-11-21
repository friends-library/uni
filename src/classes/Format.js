// @flow

type FormatType = 'pdf' | 'epub' | 'mobi' | 'audio' | 'softcover';

export default class Format {
  type: FormatType = 'pdf';

  constructor(type: FormatType = 'pdf') {
    this.type = type;
  }
}
