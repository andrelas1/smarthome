import https from 'https';
import http from 'http';

interface ICfg {
    headers: any;
}
interface IHttpClient<T> {
    get: (url: string, cfg: ICfg) => Promise<T>
    post: (url: string, cfg: ICfg, data: any) => Promise<T>
}

const httpClient = {
    get: (url, cfg) => {
        
    },
    post: (url, cfg, data) => {}
}

const httpClientModule = {
    httpClient: httpClient
}