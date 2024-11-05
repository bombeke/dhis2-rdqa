const BASE_URL = 'http://207.244.250.35:8095'; //used for testing purposes. Should be changed to / for prod.
const AUTH_HEADER = `Basic ${btoa('admin:@D1str1ct_M3')}`; //used for dev & test only. In PROD remove auth header.
export const Config = {
    baseUrl: BASE_URL,
    authHeader: AUTH_HEADER
}