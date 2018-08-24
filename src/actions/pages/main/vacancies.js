// @flow

import { apiV1 } from 'utils/api-client';

import * as types from 'constants/actions/vacancies';

export const fetchVacanciesList = (query = {}) => (dispatch) => {
    dispatch({ type: types.FETCH_VACANCIES });

    return apiV1.get('vacancies', query)
        .then(
            (json) => dispatch({
                type: types.FETCH_VACANCIES_SUCCESS,
                payload: json
            }),
            (response) => dispatch({
                type: types.FETCH_VACANCIES_FAILUR,
                payload: {
                    errors: response.errors
                }
            })
        );
};
