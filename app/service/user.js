'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findOne(name) {
    const { ctx } = this;
    const res = await ctx.curl(`https://www.zhihu.com/api/v4/members/${name}?include=employments,answer_count,follower_count,articles_count,gender`, {
      dataType: 'json',
    });
    return res.data;
  }
}

module.exports = UserService;
