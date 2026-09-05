import { jwtDecode } from "jwt-decode";


 /* Decode JWT Token */

export const getDecodedToken = () => {

    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("Invalid Token", error);
        return null;
    }
};


 /* Get User Role */
 
export const getRoleFromToken = () => {

    const decoded = getDecodedToken();

    return decoded?.role || null;
};


//   Get User Email
 
export const getEmailFromToken = () => {

    const decoded = getDecodedToken();

    return decoded?.sub || null;
};


 // Check Login Status
 
export const isAuthenticated = () => {

    return !!localStorage.getItem("token");
};


 // Check Token Expiration
 
export const isTokenExpired = () => {

    const decoded = getDecodedToken();

    if (!decoded?.exp) return true;

    return decoded.exp * 1000 < Date.now();
};


 // Logout User
 
export const logout = () => {

    localStorage.removeItem("token");
};