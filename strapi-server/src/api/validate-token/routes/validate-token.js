'use strict';

/**
 * validate-token router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::validate-token.validate-token');
