"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
function run(sv, port, getRequests) {
    console.log('CARALHO', cors_1["default"]);
    var server = sv();
    // server.use(cors());
    // server.use(bodyParser.json())
    getRequests.forEach(function (request) {
        server.get(request.path, function (req, res) {
            res.send(request.data);
        });
    });
    server.listen(port);
    return server;
}
exports.serverModule = {
    run: function () {
        var getRequests = [
            {
                path: '/',
                data: {
                    test: 'test'
                }
            }
        ];
        return run(express_1["default"], 8000, getRequests);
    }
};
function apiRequest() {
}
