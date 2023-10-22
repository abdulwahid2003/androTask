
export const PORTS = {
    DEVELOPMENT: '9900',
    PRODUCTION: '9900',
};
export const URL = {
    DEVELOPMENT: 'http://103.123.45.77',
    PRODUCTION: 'http://103.123.45.77',
}
let regionCode = null;
export const setRegionCode = (region, url) => {
    BASE_URL = `${url}/regionCode/${region}`
}
export const setFranchiseeUrl = (url) => {
    FRANCHISEE_URL = `${url}`
}

const CHAT_NODE_NAME = {
    DEVELOPMENT: 'ChatStagging',
    PRODUCTION: 'ChatLive'
}

const url = 'PRODUCTION'
export const URL_WITHOUT_REGION = `${URL.PRODUCTION}:${PORTS.PRODUCTION}/api/`;
// export const BASE_URL = 'https://live.schnelldev.in:8484/api';
export let BASE_URL = `${URL.PRODUCTION}:${PORTS.PRODUCTION}/api/regionCode/${regionCode}`;
export let FRANCHISEE_URL = `http://103.123.45.77:9434/api`;
export const GOOGLE_MAPS_APIKEY = 'AIzaSyAqrX2UFDjbr6hfVY7A0YJQ5FTE3jXxm_s';
export const CHAT_NODE = `${CHAT_NODE_NAME[url]}`