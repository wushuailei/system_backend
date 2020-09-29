var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const client = require('./db/redis/redisConfig');
const moment = require('moment');
const URL = require('url');
const JwtUtil = require('./utils/jwt');
const CONSTANT = require('./utils/constant');

const logHelper = require('./utils/logHelper');


var IndexRouter = require('./routes/IndexRouter');
var InterfaceRoutes = require('./routes/InterfaceRouter');
var UserRouter = require('./routes/UserRouter');

var app = express();

// view engine setup
var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')}\t${req.ip}: ${req.url}`)
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,Token');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})

app.use('/', IndexRouter);

// 登录token校验
app.use(function (req, res, next) {
  const u = URL.parse(req.url, true);
  const flag = CONSTANT.TOKEN_WHITE_LIST.indexOf(u.pathname) === -1
  if (flag) {
    const token = req.headers.authorization;
    let jwt = new JwtUtil(token);
    let result = jwt.verifyToken();
    // 如果考验通过就next，否则就返回登陆信息不正确
    if (result === 'err') {
      res.send({ status: 403, msg: '登录已过期,请重新登录' });
    } else {
      client.get(result, (err, data) => {
        if (err) {
          return res.send({ status: 403, msg: '登录已过期,请重新登录' })
        }
        next();
      })
    }
  } else {
    next();
  }
});

app.use('/api', InterfaceRoutes);
app.use('/user', UserRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(CONSTANT.PROT, () => {
  console.log(`系统已启动，监听端口：${CONSTANT.PROT}！`)
  logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')}\t系统已启动，监听端口：${CONSTANT.PROT}！`)
})

module.exports = app;
