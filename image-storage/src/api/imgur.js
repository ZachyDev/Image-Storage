import qs from 'qs';
// login object
const CLIENT_ID = 'e7789e0c1e796c4';
const ROOT_URL = 'https://api.imgur.com';

const login = {
    login: () => {
        const query_string = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        // redirect to new page
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(query_string)}`;
    }
}

export default login;
