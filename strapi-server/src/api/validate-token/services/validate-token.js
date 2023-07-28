'use strict';

/**
 * validate-token service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::validate-token.validate-token');
