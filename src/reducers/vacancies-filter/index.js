// @flow

import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import reduce from 'lodash/reduce';
import omit from 'lodash/omit';

import { castToType } from '@zp/utils-js/lib/cast-to-type';

import * as types from 'constants/actions/vacancies-filter';
import { defaultTypes } from 'constants/vacancies-filters';

type VacancyFilters = Object;

const initialState:VacancyFilters = {
    q: '',
    search_type: '',
    salary: '',
    geo_id: null,
    rubric_id: [],
    district_id: [],
    subway_line_id: [],
    subway_id: [],
    similar_vacancy_id: null,
    schedule_id: [],
    working_type_id: [],
    experience_length_id: [],
    education_id: [],
    employees: [],
    period: '',
    is_new_only: false,
    is_available_for_invalids: false,
    is_available_for_students: false,
    is_available_for_pensioners: false,
    employer_group: '',
    sort: '',
    speciality_id: 0,
    offset: 0,
    limit: 25
};

// в случае если поменяются типы фильтров или если появятся множественные специализации смотреть сюда
export const mapData = (data: VacancyFilters, state: VacancyFilters) => {
    if (!data.period) {
        data.is_new_only = false;
    }

    const stateRubricId = state.rubric_id || [];
    const dataRubricId = data.rubric_id || [];

    if ((stateRubricId.length === 1 && dataRubricId.length === 1) && (stateRubricId[0] !== dataRubricId[0])) {
        data.speciality_id = 0;
    }

    if (dataRubricId.length !== 1) {
        data.speciality_id = 0;
    }

    if (data.q && data.similar_vacancy_id) {
        data.similar_vacancy_id = null;
    }

    return data;
};

export default (state: VacancyFilters = initialState, action: VacancyFiltersAction | Object) => {
    switch (action.type) {
        case types.RESET_VACANCIES_FILTER:
            const payload = action.payload.value;

            if (isEmpty(payload)) {
                return initialState;
            }

            Object.keys(payload).forEach((key) => {
                payload[key] = castToType(payload[key], defaultTypes[key]);
            });

            return mapData({
                ...initialState,
                ...payload
            }, state);

        case types.CHANGE_VACANCIES_FILTER:
            const { filterName, value } = action.payload;

            return mapData({
                ...state,
                offset: state[filterName] === value ? state.offset : 0,
                [filterName]: castToType(value, defaultTypes[filterName])
            }, state);

        default:
            return state;
    }
};

export const castQueryToFilters = (data: Object): VacancyFilters => reduce(data, (result, value, key) => {
    result[key] = castToType(value, defaultTypes[key]);

    return result;
}, {});

export const getCleared = (data: Object): VacancyFilters => reduce(omit(data, 'geo_id'), (result, value, key) => {
    const typedValue = castToType(data[key], defaultTypes[key]);

    if (!isEqual(typedValue, initialState[key])) {
        result[key] = typedValue;
    }

    return result;
}, {});
