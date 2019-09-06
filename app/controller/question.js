'use strict';

const Controller = require('egg').Controller;

class QuestionController extends Controller {
  async findAll() {
    this.ctx.body = await this.service.question.findAll();
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

module.exports = QuestionController;
