
const app = require('./server.js');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

mongoose
.connect(process.env.MYDATA_DB_URI, { useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
