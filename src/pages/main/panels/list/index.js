import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PanelHeader } from '@vkontakte/vkui';
import debouce from 'lodash/debounce';

import { fetchVacanciesList } from 'actions/pages/main/vacancies';
import { changeVacanciesFilter } from 'actions/vacancies-filter';

import LOGO_SRC from './zarplata.ru-logo.svg';

import VacanciesList from './containers/list';
import Search from './views/search';
import mapStateToProps from './selectors';

import './styles.css';

class MainPage extends React.Component {
	componentDidMount() {
		this.props.actions.fetchVacanciesList({
			geo_id: this.props.currentGeo.id,
			q: this.props.vacanciesFilter.q
		});
	}

	handleChangeQ = (value) => {
		this.props.actions.changeVacanciesFilter('q', value);

		this.fetchVacancies(value);
	}

	fetchVacancies = debouce((value) => {
		this.props.actions.fetchVacanciesList({
			geo_id: this.props.currentGeo.id,
			q: value
		})
	}, 450)

	render() {
		const { vacancies, vacanciesCount, currentGeo } = this.props;

		console.log(this.props);

		return (
			<React.Fragment>
				<PanelHeader
					noShadow
					theme="light"
				>
					<div
						className="main-wrapper-logo"
					>
						<img
							src={LOGO_SRC}
							className="main-logo"
						/>
					</div>
				</PanelHeader>
				<Search
					value={this.props.vacanciesFilter.q}
					onChangeQ={this.handleChangeQ}
					currentGeo={currentGeo}
					onChangePanel={this.props.onChangePanel}
					vacanciesCount={vacanciesCount}
				/>

				{vacancies && <VacanciesList
					vacancies={vacancies}
				/>}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
		fetchVacanciesList,
		changeVacanciesFilter
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
