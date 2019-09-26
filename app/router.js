'use strict';
const homeRouter = require('./routers/home');
const userRouter = require('./routers/user');
const questionRouter = require('./routers/question');
const answerRouter = require('./routers/answer');
const commentRouter = require('./routers/comment');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.prefix('/api');
  // home
  homeRouter(app);
  // user
  userRouter(app);
  // question
  questionRouter(app);
  // answer
  answerRouter(app);
  // comment
  commentRouter(app);
};
