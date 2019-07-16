/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {// Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener( 'pause', this.onPause.bind( this ), false );
        document.addEventListener('resume', this.onResume.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function(){
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id){
        setUp();
        scanReaderActivate();
    },
    onPause:function(){
        scanReaderDisactivate();
    },
    onResume:function(){
        scanReaderActivate();
    }
};
app.initialize();

function setUp(){
    window.Keyboard.shrinkView(false);
    //window.Keyboard.hideFormAccessoryBar(true);
    window.StatusBar.hide();                                                                                    //alert("setUp!");//IT'S FOR TEST
}
function scanReaderCallback(data,fdata){
    alert(JSON.stringify(data)+"|"+JSON.stringify(fdata));
    //if(document.getElementById("app")['data-workingDoc'] =='inventory'){
    //    createTableRow(data);
    //}
}
function scanReaderActivate(){
    //if(!cordova||!cordova.plugins||!cordova.plugins.CipherlabRS30CordovaPlugin)return
    //cordova.plugins.CipherlabRS30CordovaPlugin.initialise(/* there is no callback here */);
    //cordova.plugins.CipherlabRS30CordovaPlugin.setReceiveScanCallback(function(data,fdata){
    //    scanReaderCallback(data,fdata)
    //});
}
function scanReaderDisactivate(){
    //if(!cordova||!cordova.plugins||!cordova.plugins.CipherlabRS30CordovaPlugin)return
    //cordova.plugins.CipherlabRS30CordovaPlugin.destroy(function(){
    //    alert("destroyed");
    //});
}
