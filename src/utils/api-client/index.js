import ApiClient from '@zp/utils-js/lib/api-client';

// import { ENV_TYPE } from 'constants/hosts';

import requests from './requests';

const ENV_TYPE = '';

const getAuthToken = () => {
    return '';
};

export const apiV1 = new ApiClient({
    envType: ENV_TYPE,
    version: 'v1',
    getAuthToken,
    requests
});

export const apiV2 = new ApiClient({
    envType: ENV_TYPE,
    version: 'v2',
    getAuthToken,
    requests
});

export const apiV3 = new ApiClient({
    envType: ENV_TYPE,
    version: 'v3',
    getAuthToken,
    requests
});

export const apiRpc = new ApiClient({
    envType: ENV_TYPE,
    version: 'rpc',
    getAuthToken,
    requests
});
