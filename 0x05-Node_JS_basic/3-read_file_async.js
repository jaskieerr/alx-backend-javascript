const fs = require('fs').promises;

function countStudents(p) {
  return new Promise((resolve, reject) => {
    fs.readFile(p, 'utf8')
      .then((d) => {
        const lns = d.split('\n');
        const ht = {};
        let count = -1;
        for (const ln of lns) {
          if (ln.trim() !== '') {
            const cols = ln.split(',');
            const fld = cols[3];
            const name = cols[0];
            if (count >= 0) {
              if (!Object.hasOwnProperty.call(ht, fld)) {
                ht[fld] = [];
              }
              ht[fld] = [...ht[fld], name];
            }
            count += 1;
          }
        }
        console.log(`Number of students: ${count}`);
        for (const k in ht) {
          if (Object.hasOwnProperty.call(ht, k)) {
            console.log(`Number of students in ${k}: ${ht[k].length}. List: ${ht[k].join(', ')}`);
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
