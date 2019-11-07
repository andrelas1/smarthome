# NodeJS Application to Receive and Send Intents to Google Smart Home
NodeJS Application to Receive and Send Intents to Google Smart Home

## Tools
* `rxjs`
* `express`
* `rollup`
* `jest`
* `typescript` 

## Useful links
* Google Client Library : https://github.com/actions-on-google/actions-on-google-nodejs
* SmartHome overview: https://developers.google.com/assistant/smarthome/overview  
* Samples: https://developers.google.com/assistant/smarthome/samples/
* OAuth 2.0 to Access Google API: https://developers.google.com/identity/protocols/OAuth2

## Overview about Tutorial from Google
It starts here -> https://github.com/actions-on-google/smart-home-local

Provider -> https://github.com/actions-on-google/smart-home-nodejs (Bridge between the Assistant and the Smart Device)
This is the cloud service that the google assistant will connect to using OAuth (user id and secret). This cloud service is the bridge between the Google Assistant and the Smart Device. The cloud service syncs with Google to send the devices capabilities, so the Assistant can record it on its Home Graph.

HomeGraph API -> https://console.developers.google.com/apis/api/homegraph.googleapis.com/credentials?project=devocorrer
That's the HomeGraph API, that will give access to the devices capabilities.

Action -> https://console.actions.google.com/u/0/project/devocorrer/overview
The Action Console is a configuration setup where the Assistant will connect to get information about which webhook to call and how to authenticate.

Database -> https://console.firebase.google.com/u/0/project/devocorrer/database/firestore/data~2Fusers~2F1234
Not completely sure about this. Probably just a cloud service to have access from remote devices.

Authentication -> https://console.cloud.google.com/apis/credentials?project=devocorrer
This is to create a service account, so the Provider can connect to Google to synchronize. It is server-to-server and uses JWT.

Virtual Devices -> https://github.com/actions-on-google/smart-home-nodejs#setup-sample-service
This is a simple frontend to create virtual smart devices to test the Provider.
