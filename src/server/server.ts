import { default as express, Express } from 'express';
// import { Observable, Subscriber } from 'rxjs';

interface IServerModule {
    run: () => any,
}
interface IExpressRequests {
    path: string;
    data: any;
}

function run(sv: () => Express, port: number, getRequests: IExpressRequests[])  {
    const server = sv();
    getRequests.forEach(request => {
        server.get(request.path, (req,res) => {
            res.send(request.data);
        })
    });
    server.listen(port);
    return server;
}
export const serverModule: IServerModule  = {
    run: () => {
        const getRequests = [
            {
                path: '/',
                data: {
                    test: 'test'
                }
            }
        ];
        return run(express, 8000, getRequests);
    },
 }

function apiRequest() {

}