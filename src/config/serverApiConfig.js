export const API_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://dev-server.idurarapp.com/api/'
    : 'https://backend-parts.onrender.com/api/';
export const DOWNLOAD_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://dev-server.idurarapp.com/download/'
    : 'https://backend-parts.onrender.com/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
