import * as React from 'react';
import { Link, Header } from '@vkontakte/vkui';

import Search from 'components/modules/search';

import { PANELS } from 'pages/main';

export default class SearchBlock extends React.Component {
    handleChangePanel = (e) => {
        e.preventDefault();

        this.props.onChangePanel(PANELS.geoPicker);
    }

    handleCHangeSearch = (value) => {
        this.props.onChangeQ(value);
    };

	render() {
        const { vacanciesCount, currentGeo, value } = this.props;

		return (
            <React.Fragment>
                <Search value={value} onChange={this.handleCHangeSearch} />

                <Header level="2">
                    {vacanciesCount} вакансий в <Link onClick={this.handleChangePanel}>{currentGeo.grammatical_cases_ru.locative}</Link>
                </Header>
            </React.Fragment>
		);
	}
}
