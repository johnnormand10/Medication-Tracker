const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const childRouter = require('./routes/childMedication.router');
const inviteRouter = require('./routes/invite.router');
const nameRouter = require('./routes/names.router');
const tableRouter = require('./routes/table.router');
const certainRouter = require('./routes/certain.router');
const childName = require('./routes/childName.router');
const saveInfo = require('./routes/saveInfo.router');
const fetchEditInfo = require('./routes/fetchEditInfo.router');
const currentMedication = require('./routes/currentMedication.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/user/medication', childRouter);
app.use('/api/user/invite', inviteRouter);
app.use('/api/user/names', nameRouter);
app.use('/api/user/table', tableRouter);//th-th
app.use('/api/user/certain', certainRouter);
app.use('/name', childName);
app.use('/user/save', saveInfo);
app.use('/user/edit', fetchEditInfo);
app.use('/get/table', currentMedication);




// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
