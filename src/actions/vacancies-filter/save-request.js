// @flow

import omit from 'lodash/omit';

import * as types from 'constants/actions/vacancies-filter';

import type { VacancyFilters } from 'types/vacancy-filters';

export type SaveVacanciesRequest = {
    type: 'SAVE_REQUEST_VACANCIES',
    payload: VacancyFilters
};

export default (query: VacancyFilters): SaveVacanciesRequest => ({
    type: types.SAVE_REQUEST_VACANCIES,
    payload: omit(query, 'is_hidden')
});
