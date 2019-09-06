'use strict';

const Service = require('egg').Service;

class QuestionService extends Service {
  async findAll() {
    const allQuestions = await this.app.mysql.get('question');
    console.log(allQuestions);
    return allQuestions;
  }
}

module.exports = QuestionService;
