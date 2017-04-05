/**
 * # Authorization functions
 * Copyright(c) 2017 Stefano Balietti <info@nodegame.org>
 * MIT Licensed
 *
 * http://www.nodegame.org
 * ---
 */
module.exports = function(auth) {

    // The auth object contains a number of callbacks that specify
    // how the channel handles authorization / identification
    // of incoming connections.

    // The Auth API defines 3 callbacks:

    // auth.authorization('player', authPlayers);
    // auth.clientIdGenerator('player', idGen);
    auth.clientObjDecorator('player', decorateClientObj);

    // ## Client object decoration function
    //
    // Modifies the client object that will be stored in the registry
    //
    // <clientObj> The client object contains already a number of properties,
    // which vary depending on the server configuration. Some properties
    // can never be modified, or an error will be thrown. They are:
    //
    //  - id
    //  - sid
    //  - admin
    //  - clientType
    //
    // <info> See the authorization function for description
    //
    // In this example the type of browser is added.
    //
    function decorateClientObj(clientObj, info) {
        if (info.headers) clientObj.userAgent = info.headers['user-agent'];
    }
};
