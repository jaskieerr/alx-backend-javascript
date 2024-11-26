const express = require('express');
const fs = require('fs').promises;

const app = express();

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((d) => {
      res.send(`This is the list of our students\n${d}`);
    })
    .catch((err) => {
      res.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
