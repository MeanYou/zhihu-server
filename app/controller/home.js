'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async recommend() {
    const { ctx } = this;
    const data = await this.service.home.recommend(ctx.query.offset, ctx.query.limit);
    ctx.body = data;
  }
  async comment() {
    const { ctx } = this;
    const data = await this.service.home.comment(ctx.params.answerId, ctx.query.offset, ctx.query.limit);
    ctx.body = data;
  }
}

module.exports = HomeController;
