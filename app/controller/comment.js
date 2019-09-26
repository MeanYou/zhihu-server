'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async findAll() {
    this.ctx.body = this.ctx.request.url;
  }
  async findOne(id) {
    this.ctx.body = this.ctx.request.url + id;
  }
  async add() {
    this.ctx.body = this.ctx.request.url;
  }
  async update(id) {
    this.ctx.body = this.ctx.request.url + id;
  }
  async delete(id) {
    this.ctx.body = this.ctx.request.url + id;
  }
}

module.exports = CommentController;
