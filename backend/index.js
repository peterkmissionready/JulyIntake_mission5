const app = require('./server.js');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose
.connect(`mongodb://localhost:27017/mongo`, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
