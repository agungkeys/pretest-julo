import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const CURRENT_ENV = publicRuntimeConfig.ENV || null;
const CURRENT_API = publicRuntimeConfig.API || null;
const CURRENT_HOST = publicRuntimeConfig.HOST || null;
const CURRENT_API_CLIENT_ID = publicRuntimeConfig.API_CLIENT_ID || null;
const BASE_URL = CURRENT_HOST;
const LOGO = `/julo.png`;
const LOGO_150 = `/julo.png`;
const LOGO_300 = `/julo.png`;

const env = {
  CURRENT_ENV,
  CURRENT_API,
  CURRENT_HOST,
  CURRENT_API_CLIENT_ID,
  BASE_URL,
  LOGO,
  LOGO_150,
  LOGO_300
};

export default env;