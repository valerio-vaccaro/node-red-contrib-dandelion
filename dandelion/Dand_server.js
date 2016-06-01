/**
 * dandelion.js
 * A Node-RED client for the Dandelion API.
 * Copyright 2016 Valerio Vaccaro - www.valeriovaccaro.it
 *
 * Licensed under the MIT License.
 **/

module.exports = function(RED) {
    function DandServerNode(n) {
        RED.nodes.createNode(this,n);
        this.token = n.token;
    }
    RED.nodes.registerType("dand-server",DandServerNode);
}