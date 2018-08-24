import head from 'lodash/head';
import { LocalStorage } from '@zp/utils-js/lib/user-storage';

import * as types from 'constants/actions/geo';

const defaultGeo = {
    id: 1219,
    name: 'Россия',
    level: 'country',
    parent_level: null,
    franchise_name: 'Zarplata',
    mobile_codes: [],
    domain: 'zarplata.ru',
    skin: 'zarplata',
    site_name: 'Зарплата.ру',
    copyright: '&copy; ООО <a href="#">НГС</a>',
    geonames_id: 2017370,
    phone_code_length: 5,
    alias: 'russia',
    phone_code: '7',
    gmt: null,
    name_ru: 'Россия',
    grammatical_cases_ru: {
        nominative: 'Россия',
        genitive: 'России',
        locative: 'России',
        locative_preposition: 'в'
    },
    is_region_capital: false,
    full_title: 'Россия'
};

const savedGeo = LocalStorage.getItem('currentGeo');

const initialState = {
    data: savedGeo ? JSON.parse(savedGeo) : null,
    isLoading: false,
    errors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CURRENT_GEO:
            return {
                ...state,
                isLoading: true
            };

        case types.FETCH_CURRENT_GEO_SUCCESS:
            const currentGeo = head(action.payload.geo);

            LocalStorage.setItem('currentGeo', JSON.stringify(currentGeo));

            return {
                ...state,
                data: currentGeo,
                isLoading: false
            };

        case types.FETCH_CURRENT_GEO_FAILURE:
            return {
                ...state,
                data: defaultGeo,
                isLoading: false
            };

        case types.CHANGE_CURRENT_GEO:
            LocalStorage.setItem('currentGeo', JSON.stringify(action.payload));

            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
};

export const getBounds = (state) => {
    const { bounds } = state.data;

    return bounds && bounds.length === 2 ? bounds : null;
};
