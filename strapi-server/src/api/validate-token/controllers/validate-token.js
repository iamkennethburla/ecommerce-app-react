'use strict';

/**
 * validate-token controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::validate-token.validate-token');
