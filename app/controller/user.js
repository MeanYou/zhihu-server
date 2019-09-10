'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async findOne() {
    const { ctx } = this;
    const data = await ctx.service.user.findOne(ctx.captures[0]);
    ctx.body = data;
  }
}

module.exports = UserController;
