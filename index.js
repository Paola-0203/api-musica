const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('jason spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//route
app.use(require('./routes/index'));
app.use('/api/music', require('./routes/music'));

//startong the server
app.listen(app.get('port'), ()=> {
    console.log('server on port ' + app.get('port'));
    
});