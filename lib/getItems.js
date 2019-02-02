const { promisify } = require('util');
const glob = promisify(require('glob'));
const marked = require('meta-marked');
const { readFile } = require('fs');

const readAFile = promisify(readFile);
const format = require('date-fns/format');

const pad = num => `000${num}`.substr(-3);



let items = [];

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a rel="noopener noreferrer" target="_blank" href="${href}"> ${text}</a>`;
};


const loadItems = async () => {
    const files = await glob('places/moscow/*.md');
    const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
    const showMarkdown = await Promise.all(markdownPromises);

    items = showMarkdown
      .map(md => {
        return marked(md, { renderer })}) // convert to markdown
      .map((show, i) => {
        const number = show.meta.number;
  
        return {
          ...show.meta,
          html: show.html,
          notesFile: files[i],
          displayDate: format(parseFloat(show.meta.date), 'MMM do, YYYY'),
          number,
        };
      }) // flatten
      .map(show => ({ ...show, displayNumber: pad(show.number) })) // pad zeros
      .reverse();
  };
  
  exports.getItems = () => {
    const now = Date.now();
    return items.filter(item => item.date < now);
  };

  loadItems();