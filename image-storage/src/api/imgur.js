import qs from 'qs';
const CLIENT_ID = '1515796c56d5751';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const query_string = {
            client_id: CLIENT_ID,
            resonse_type: 'token'
        }
        window.location = `${ ROOT_URL }/oauth2/authorize?${qs.stringify(query_string)}`;
    }
}