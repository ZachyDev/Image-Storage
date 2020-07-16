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
http://localhost:8080/oauth2/callback#access_token=51e3d4e9487496f8de675183ffde6282a1421c01&expires_in=315360000&token_type=bearer&refresh_token=45f9f56522900ec4b7676dbecf36a8a36cab2629&account_username=ZachyDev&account_id=134670835
