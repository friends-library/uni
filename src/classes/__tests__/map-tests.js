// @flow
/* eslint-disable prefer-destructuring */
import friendFromJS from '../map';
import Document from '../Document';
import Format from '../Format';
import Edition from '../Edition';
import Chapter from '../Chapter';

describe('friendFromJS()', () => {
  let js;

  beforeEach(() => {
    js = {
      name: 'Rebecca Jones',
      slug: 'rebecca-jones',
      description: 'description',
      documents: [
        {
          title: 'Diary and Letters',
          slug: 'diary-and-letters',
          description: 'doc desc',
          tags: ['journal', 'letters'],
          editions: [
            {
              type: 'updated',
              pages: 261,
              formats: [
                { type: 'pdf' },
                { type: 'epub' },
                { type: 'mobi' },
              ],
              chapters: [
                { title: 'Chapter 1' },
                { title: 'Chapter 2' },
              ],
            },
          ],
        },
      ],
    };
  });

  it('should map the basic props', () => {
    const friend = friendFromJS(js);

    expect(friend.name).toBe('Rebecca Jones');
    expect(friend.slug).toBe('rebecca-jones');
    expect(friend.description).toBe('description');
  });

  it('maps documents', () => {
    const friend = friendFromJS(js);

    expect(friend.documents.length).toBe(1);
    expect(friend.documents[0]).toBeInstanceOf(Document);
    expect(friend.documents[0].tags).toEqual(['journal', 'letters']);
  });

  it('maps document editions', () => {
    const edition = friendFromJS(js).documents[0].editions[0];

    expect(edition).toBeInstanceOf(Edition);
    expect(edition.pages).toBe(261);
    expect(edition.type).toBe('updated');
  });

  it('maps document edition formats', () => {
    const formats = friendFromJS(js).documents[0].editions[0].formats;

    expect(formats[0]).toBeInstanceOf(Format);
    expect(formats[0].type).toBe('pdf');
    expect(formats[1].type).toBe('epub');
    expect(formats[2].type).toBe('mobi');
  });

  it('maps document edition chapters', () => {
    const chapters = friendFromJS(js).documents[0].editions[0].chapters;

    expect(chapters[0]).toBeInstanceOf(Chapter);
    expect(chapters[0].title).toBe('Chapter 1');
    expect(chapters[1].title).toBe('Chapter 2');
  });
});
