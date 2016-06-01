/**
 * dandelion.js
 * A Node-RED client for the Dandelion API.
 * Copyright 2016 Valerio Vaccaro - www.valeriovaccaro.it
 *
 * Licensed under the MIT License.
 **/

var RED = require(process.env.NODE_RED_HOME+"/red/red");

function txt_sim(n) {
    RED.nodes.createNode(this,n);

    var msg = {};
    var value;
    var text = "";
    var node = this;

    // Get varables from the node
    this.value = n.value;
    
    // Status icon
    this.status({fill:"grey",shape:"dot",text:"---"});

    this.on("input", function(msg){ 
        try { 
            text = msg.payload;
            this.status({fill:"blue",shape:"dot",text:text});
        }
	    catch (err) { console.log(err); }    
    });

}



// Register the node by name. This must be called before overriding any of the
// Node functions.
RED.nodes.registerType("txt_sim", txt_sim);
RED.nodes.registerType("txt_nex", txt_nex);
RED.nodes.registerType("txt_cl", txt_cl);
RED.nodes.registerType("txt_li", txt_li);
