'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'verifyEmailSent', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      after: 'activated',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'verifyEmailSent');
  },
};
