"use strict";
// FOR MORE INFORMATION: https://github.com/hobbyquaker/lgtv2
exports.__esModule = true;
var lgtv = require("lgtv2")({
    url: 'ws://192.168.178.14:3000'
});
lgtv.on('error', function (err) {
    console.log(err);
});
var openNetflix = function () {
    var id = 'netflix';
    // To get any 
    var seriesId = '70178217'; // House of cards, based on http://healdb.com/
    var movieId = '80142090'; // Baby driver
    // const contentId = "m=http://api.netflix.com/catalog/titles/movies/" + movieId;
    var contentId = "m=http://api.netflix.com/catalog/titles/series/" + seriesId;
    lgtv.request('ssap://system.launcher/launch', {
        id: id,
        contentId: contentId
    });
};
var listenToVolumeChanges = function () {
    lgtv.subscribe('ssap://audio/getVolume', function (err, res) {
        if (res.changed.indexOf('volume') !== -1)
            console.log('volume changed', res.volume);
        if (res.changed.indexOf('muted') !== -1)
            console.log('mute changed', res.muted);
    });
};
var setVolume = function (volume) {
    lgtv.request('ssap://audio/setVolume', { volume: volume });
};
var showToast = function (message) {
    lgtv.request('ssap://system.notifications/createToast', { message: message });
};
var playPause = function () {
    lgtv.getSocket('ssap://com.webos.service.networkinput/getPointerInputSocket', function (err, sock) {
        if (!err) {
            sock.send('button', { name: 'ENTER' }); // ok = ENTER
        }
    });
};
var turnOff = function () {
    lgtv.request('ssap://system/turnOff', function (err, res) {
        lgtv.disconnect();
    });
};
lgtv.on('connect', function () {
    console.log('Connected to TV.');
    // listenToVolumeChanges();
    // setVolume(25);
    // showToast('funcionou caceteee');
    openNetflix();
    // playPause();
    // turnOff();
});
exports.tvModule = {
    run: function () { }
};
