const express   = require('express');
const app       = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//라우트 객체 생성
const mainRouter    = require('./routes/main_route');
const taskRouter    = require('./routes/task_route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRouter);   // localhost:8080/
app.use('/task', taskRouter);   // localhost:8080/task

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});