'use strict';
const questionRouter = require('./routers/question');
const answerRouter = require('./routers/answer');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/recommend', controller.home.recommend);
  // question
  questionRouter(app);
  // answer
  answerRouter(app);
};
