'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456',//plain text,    asdfawfrfrfasdf -> hash password
        firstName: 'HoidanIt',
        lastName: 'Hoanh',
        address: 'VIỆT NAM',
        gender: 1,
        typeRole: '',
        keyRole: 'ROLE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
