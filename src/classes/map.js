// @flow
import Friend from './Friend';
import Document from './Document';
import Edition from './Edition';
import Format from './Format';
import Chapter from './Chapter';


export default function friendFromJS(js: Object): Friend {
  return new Friend(
    js.name,
    js.slug,
    js.description,
    (js.documents || []).map(document => new Document(
      document.title,
      document.slug,
      document.description,
      document.tags,
      (document.editions || []).map(edition => new Edition(
        edition.type,
        edition.pages,
        (edition.formats || []).map(format => new Format(format.type)),
        (edition.chapters || []).map(chapter => new Chapter(chapter.title)),
      )),
    )),
  );
}
