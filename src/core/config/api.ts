const baseUrl = 'https://api.thecatapi.com/v1';
const serverUrl =
    process.env.NODE_ENV && process.env.NODE_ENV === 'development'
        ? 'http://localhost:4040'
        : 'https://cats2-all.herokuapp.com';
console.log('serverUrl', serverUrl);

export const API = {
    breeds: `${baseUrl}/breeds`,
    images: `${baseUrl}/images`,
    auth: `${serverUrl}/api/v1/auth/register`,
    login: `${serverUrl}/api/v1/auth/login`,
    me: `${serverUrl}/api/v1/auth/me`,
    logout: `${serverUrl}/api/v1/auth/logout`
};
