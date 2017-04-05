/**
 * # Game stages definition file
 * Copyright(c) 2017 Stefano Balietti <info@nodegame.org>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(stager, settings) {

    stager
        .next('nothing')

    return stager.getState();
};
