const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const multer = require('multer');
const uuid = require('uuid');
const cors = require('cors')

const {Config} = require('./config/index')

mongoose.connect(Config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log('Error de conexión', e));

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public', 'uploads'),
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const uniqueFileName = uuid.v4() + fileExt;
    cb(null, uniqueFileName);
  }
  
});

app.use(multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const isFileTypeAllowed = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const isMimeTypeAllowed = allowedFileTypes.test(file.mimetype);
    if (isFileTypeAllowed && isMimeTypeAllowed) {
      cb(null, true);
    } else {
      cb(new Error('Error: El archivo debe ser una imagen válida.'));
    }
  }
}).single('image'));

const indexRoutes = require('./routes/index.routes.js');
const userRoutes = require('./routes/users.routes.js');

const userRouter = require('./models/Usuario');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/users', userRoutes);

app.use(cors({origin: 'http://127.0.0.1:5500/'}))

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});