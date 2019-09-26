'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 基本CRUD
  router.get('/comment', controller.comment.findAll);
  router.get('/comment/:id', controller.comment.findOne);
  router.post('/comment', controller.comment.add);
  router.put('/comment/:id', controller.comment.update);
  router.del('/comment/:id', controller.comment.delete);
};
