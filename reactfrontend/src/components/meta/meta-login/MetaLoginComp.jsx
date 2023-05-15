import Cookies from 'js-cookie';


export function isLoggedIn() {
    const sessionId = Cookies.get('sessionid');
    return !!sessionId; // Returns true if sessionId exists, false otherwise
}
  