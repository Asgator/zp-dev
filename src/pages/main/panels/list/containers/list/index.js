import * as React from 'react';

import VacancyItem from './views/vacancy-item';

export default class VacanciesListContainer extends React.PureComponent {    
    renderItem(vacancy) {
        return (
            <VacancyItem
                key={vacancy.id}
                vacancy={vacancy}
            />
        )
    }

	render() {
		return (
			<React.Fragment>
                {this.props.vacancies.map(this.renderItem)}
            </React.Fragment>
		);
	}
}
