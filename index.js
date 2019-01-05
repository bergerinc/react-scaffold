const express = require('express');
const path = require('path');
const app = express();

//routes
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', (err,req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
