// @flow
import * as types from 'constants/actions/vacancies-filter';

import type { Dispatch } from 'redux';

export type VacancyFiltersAction = {
    type: 'CHANGE_VACANCIES_FILTER',
    payload: {
        filterName: string,
        value: any
    }
};

type VacanciesQuery = {};

export const changeVacanciesFilter = (filterName: string, value: string): VacancyFiltersAction => ({
    type: types.CHANGE_VACANCIES_FILTER,
    payload: {
        value,
        filterName
    }
});

export const resetVacanciesFilter = (value: VacanciesQuery = {}) => (dispatch: Dispatch<Object>, getState: Function): void => {
    const { currentGeo } = getState();

    dispatch({
        type: types.RESET_VACANCIES_FILTER,
        payload: {
            value: {
                ...value,
                geo_id: currentGeo.data.id
            }
        }
    });
};

export const hideAdditionalFilters = () => ({
    type: types.HIDE_ADDITIONAL_FILTERS,
    payload: false
});

export const showAdditionalFilters = () => ({
    type: types.SHOW_ADDITIONAL_FILTERS,
    payload: true
});

export const toggleAdditionalFilters = () => (dispatch: Dispatch<Object>, getState: Function): void => {
    const { vacanciesFilter } = getState();

    if (!vacanciesFilter.isAdditionalFiltersOpened) {
        dispatch(showAdditionalFilters());
    } else {
        dispatch(hideAdditionalFilters());
    }
};
