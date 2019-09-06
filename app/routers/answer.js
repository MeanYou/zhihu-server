'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/answer', controller.answer.findAll);
  router.get('/answer/:id', controller.answer.findOne);
  router.post('/answer', controller.answer.add);
  router.put('/answer/:id', controller.answer.update);
  router.del('/answer/:id', controller.answer.delete);
};
