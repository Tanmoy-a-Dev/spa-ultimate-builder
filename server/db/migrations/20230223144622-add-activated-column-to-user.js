'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'activated', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      after: 'password',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'activated');
  },
};
