import cleintId from './SpotifyAPI';
import  redirectURI from './SpotifyAPI'

let accessToken;



const Spotfiy = {

    getAccessToken(){
        if (accessToken) {
            return accessToken;
        } 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        } else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cleintId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    }

}

export default Spotfiy