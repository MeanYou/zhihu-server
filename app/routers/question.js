'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/questions', controller.question.findAll);
  router.get('/question/:id', controller.question.findOne);
  router.post('/question', controller.question.add);
  router.put('/question/:id', controller.question.update);
  router.del('/question/:id', controller.question.delete);
};
