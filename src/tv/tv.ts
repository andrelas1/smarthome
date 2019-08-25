// FOR MORE INFORMATION: https://github.com/hobbyquaker/lgtv2

const lgtv = require("lgtv2")({
    url: 'ws://192.168.178.14:3000'
});

lgtv.on('error', function (err) {
    console.log(err);
});

const openNetflix = () => {
    const id = 'netflix';

    // To get any 
    const seriesId = '70178217'; // House of cards, based on http://healdb.com/
    const movieId = '80142090';  // Baby driver

    // const contentId = "m=http://api.netflix.com/catalog/titles/movies/" + movieId;
    const contentId = "m=http://api.netflix.com/catalog/titles/series/" + seriesId;

    lgtv.request('ssap://system.launcher/launch',
     {
       id,
       contentId 
    });
}


const listenToVolumeChanges = () => {
    lgtv.subscribe('ssap://audio/getVolume', function (err, res) {
        if (res.changed.indexOf('volume') !== -1) console.log('volume changed', res.volume);
        if (res.changed.indexOf('muted') !== -1) console.log('mute changed', res.muted);
    });
}

const setVolume = (volume) => {
    lgtv.request('ssap://audio/setVolume', {volume})
}

const showToast = (message) => {
    lgtv.request('ssap://system.notifications/createToast', {message});
}

const playPause = () => {
    lgtv.getSocket('ssap://com.webos.service.networkinput/getPointerInputSocket',
      function (err, sock) {
        if (!err) {
            sock.send('button', {name: 'ENTER'}); // ok = ENTER
        }
    }); 
}

const turnOff = () => {
    lgtv.request('ssap://system/turnOff', function (err, res) {
        lgtv.disconnect();
    });
}

lgtv.on('connect', function () {
    console.log('Connected to TV.');
    
    // listenToVolumeChanges();
    // setVolume(25);
    // showToast('funcionou caceteee');
    openNetflix();
    // playPause();
    // turnOff();
});

export const tvModule = {
    run: () => {}
}
