import qs from 'qs';
const CLIENT_ID = 'e7789e0c1e796c4';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const query_string = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ ROOT_URL }/oauth2/authorize?${qs.stringify(query_string)}`
    }
}

