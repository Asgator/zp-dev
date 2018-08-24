
import * as types from 'constants/actions/vacancies';

const initState = {
    isLoading: false,
    ids: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_VACANCIES_SUCCESS:
            return {
                ...state,
                metadata: action.payload.metadata,
                ids: action.payload.vacancies.map((item) => item.id)
            };
        default:
            return state;
    }
};
