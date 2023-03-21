'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'verifyEmailSent', {
      type: Sequelize.DATE,
      defaultValue: null,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'verifyEmailSent', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      after: 'activated',
    });
  },
};
