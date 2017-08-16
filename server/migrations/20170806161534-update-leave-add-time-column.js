'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('Bookings', ['labId'], {
      type: 'FOREIGN KEY',
      name: 'custom_fkey_constraint_name',
      references: { //Required field
        table: 'Labs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  }
};
