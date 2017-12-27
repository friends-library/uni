// @flow
import Audio from './Audio';

export default class AudioPart {
  seconds: number;
  filesizeHq: number;
  filesizeLq: number;
  soundcloudIdHq: number;
  soundcloudIdLq: number;
  title: string = '';
  chapters: Array<number> = [];
  audio: Audio;

  constructor(
    seconds: number,
    filesizeHq: number,
    filesizeLq: number,
    soundcloudIdHq: number,
    soundcloudIdLq: number,
    title: string = '',
    chapters: Array<number> = [],
  ) {
    this.seconds = seconds;
    this.filesizeHq = filesizeHq;
    this.filesizeLq = filesizeLq;
    this.soundcloudIdHq = soundcloudIdHq;
    this.soundcloudIdLq = soundcloudIdLq;
    this.title = title;
    this.chapters = chapters;
  }

  toJSON(): AudioPart {
    delete this.audio;
    return this;
  }
}
