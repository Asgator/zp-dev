import { createSelector } from 'reselect';
import get from 'lodash/get';

import getByIds from 'utils/get-by-ids';

const vacanciesSelector = createSelector(
    [
        state => state.vacancies.entities,
        state => state.pages.main.vacancies.ids
    ],
    (entities, ids) => {
        return getByIds(entities, ids);
    }
);

const mapStateToProps = createSelector(
    [
        vacanciesSelector,
        state => get(state.pages.main.vacancies.metadata, 'resultset.count'),
        state => state.currentGeo.data,
        state => state.vacanciesFilter
    ],
    (
        vacancies,
        vacanciesCount,
        currentGeo,
        vacanciesFilter
    ) => ({
        vacancies,
        vacanciesCount,
        currentGeo,
        vacanciesFilter
    })
);

export default mapStateToProps;
