// @flow

import { apiV1 } from 'utils/api-client';

import * as types from 'constants/actions/geo';

export const geoRedirect = (id: number, url: string, query: {}) => (dispatch: Dispatch<any>) => {
    apiV1.get(`geo/${id}`)
        .then((json) => {
            const [geo]: Geo = json.geo;

            dispatch({
                type: types.GEO_REDIRECT,
                payload: {
                    geo, url, query
                }
            });
        }, () => {});
};

const processCurrentGeo = (dispatch: Dispatch<Object>, promise: Promise<Response>): Promise<any> => {
    dispatch({
        type: types.FETCH_CURRENT_GEO
    });

    return promise
        .then(json => dispatch({
            type: types.FETCH_CURRENT_GEO_SUCCESS,
            payload: json
        }), response => dispatch({
            type: types.FETCH_CURRENT_GEO_FAILURE,
            payload: {
                errors: response.errors
            }
        }));
};

export const detectGeo = (geoIp?: string) =>
    (dispatch: Dispatch<Object>) =>
        processCurrentGeo(dispatch, apiV1.post('geo/current', { rssr_geo_ip: geoIp }));

export const fetchCurrentGeo = (id: number) =>
    (dispatch: Dispatch<Object>) =>
        processCurrentGeo(dispatch, apiV1.get(`geo/${id}`));

export const fetchGeo = (id: number) => (dispatch: Dispatch<Object>): Promise<any> => {
    dispatch({
        type: types.FETCH_GEO,
        payload: { id }
    });

    return apiV1.get(`geo/${id}`)
        .then(json => dispatch({
            type: types.FETCH_GEO_SUCCESS,
            payload: {
                id,
                ...json
            }
        }), response => dispatch({
            type: types.FETCH_GEO_FAILURE,
            payload: {
                id,
                errors: response.errors
            },
            error: true
        }));
};

export const resetGeo = (): PlainAction => ({
    type: types.RESET_GEO
});

export const changeCurrentGeo = (geo) => ({
    type: types.CHANGE_CURRENT_GEO,
    payload: geo
});