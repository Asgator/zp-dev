import set from 'lodash/set';

import * as types from 'constants/actions/vacancies';

const extendCollection = (collection, vacancy) => set(collection, vacancy.id, vacancy);

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_VACANCIES_SUCCESS:
            return action.payload.vacancies.reduce(extendCollection, { ...state });
        default:
            return state;
    }
};
