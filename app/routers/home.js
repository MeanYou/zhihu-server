'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/home/recommend', controller.home.recommend);
  router.get('/home/answer/:answerId/comment', controller.home.comment);
};
