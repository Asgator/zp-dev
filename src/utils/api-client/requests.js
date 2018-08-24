import defaultRequests from '@zp/utils-js/lib/api-client/requests';
import promiseDeduplicate from '@zp/utils-js/lib/promise-deduplicate';

// import ENV_TYPE from 'constants/hosts/env-type';

const extractJson = (response) => response.json();
const responseJson = (fn) => (...args) => fn(...args).then(extractJson);

export default Object.keys(defaultRequests).reduce((result, method) => {
    if (method === 'delete') {
        return result;
    }

    const request = responseJson(defaultRequests[method]);

    result[method] = promiseDeduplicate(request, {
        onDuplicate: (...args) => {
            // if (ENV_TYPE) {
            //     console.warn(new Error(`Duplicate request ${method.toUpperCase()}`)); // eslint-disable-line no-console
            // }
        }
    });

    return result;
}, { ...defaultRequests });
