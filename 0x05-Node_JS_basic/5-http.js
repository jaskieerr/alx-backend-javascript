const http = require('http');
const fs = require('fs').promises;

function countStudents(p) {
  return new Promise((res, rej) => {
    fs.readFile(p, 'utf8')
      .then((d) => {
        const lns = d.split('\n');
        const ht = {};
        let cnt = -1;
        let out = '';
        for (const ln of lns) {
          if (ln.trim() !== '') {
            const cols = ln.split(',');
            const fld = cols[3];
            const name = cols[0];
            if (cnt >= 0) {
              if (!Object.hasOwnProperty.call(ht, fld)) {
                ht[fld] = [];
              }
              ht[fld] = [...ht[fld], name];
            }
            cnt += 1;
          }
        }
        out += `Number of students: ${cnt}\n`;
        for (const k in ht) {
          if (Object.hasOwnProperty.call(ht, k)) {
            out += `Number of students in ${k}: ${ht[k].length}. List: ${ht[k].join(', ')}\n`;
          }
        }
        res(out);
      })
      .catch(() => {
        rej(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((d) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${d}`);
      })
      .catch((err) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
