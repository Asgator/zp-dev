// @flow

import { combineReducers } from 'redux';

import pages from './pages';
import vacancies from './vacancies';
import currentGeo from './current-geo';
import vacanciesFilter from './vacancies-filter';

export default combineReducers({
    pages,
    vacancies,
    currentGeo,
    vacanciesFilter
});
