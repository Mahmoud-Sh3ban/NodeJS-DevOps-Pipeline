const express = require('express');

const app = express();

// In-memory data to store the votes
let votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  Go: 0,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Vote for Your Favorite Programming Language</title>
      <style>
        body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          padding: 0;
        }

        form {
          text-align: center;
        }

        ul {
          text-align: center;
          list-style-type: none;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <h1>Vote for Your Favorite Programming Language</h1>
      <form action="/vote" method="POST">
        <label>
          <input type="radio" name="language" value="JavaScript"> JavaScript
        </label>
        <label>
          <input type="radio" name="language" value="Python"> Python
        </label>
        <label>
          <input type="radio" name="language" value="Java"> Java
        </label>
        <label>
          <input type="radio" name="language" value="Go"> Go
        </label>
        <br>
        <br>
        <button type="submit">Vote</button>
      </form>
      <h2>Current Votes:</h2>
      <ul>
        ${Object.entries(votes).map(([language, count]) => `<li>${language}: ${count} (${getVotePercentage(count)}%)</li>`).join('')}
      </ul>
    </body>
    </html>
  `;

  res.send(html);
});

app.post('/vote', (req, res) => {
  const { language } = req.body;
  if (votes.hasOwnProperty(language)) {
    votes[language]++;
  }
  res.redirect('/');
});

function getVotePercentage(count) {
  const totalVotes = Object.values(votes).reduce((sum, voteCount) => sum + voteCount, 0);
  return ((count / totalVotes) * 100).toFixed(2);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
