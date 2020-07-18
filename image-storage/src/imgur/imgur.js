// qs library
import qs from 'qs';
// client_id
const CLIENT_ID = 'e7789e0c1e796c4';
// root_url
const ROOT_URL = 'https://api.imgur.com';
// login object
const login = {
    loginUser: () => {
        const query_string = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        // redirect to a  new page
        window.location = `${ ROOT_URL }/oauth2/authorize?${ qs.stringify(query_string) }`;
    }
}

export default login;