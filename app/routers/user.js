'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/api/user/:token', controller.user.findOne);
};
