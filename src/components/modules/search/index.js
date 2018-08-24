import * as React from 'react';
import { Search } from '@vkontakte/vkui';

import './styles.css';

export default class SearchModules extends React.Component {
	render() {
		return (
            <div className="main-search">
                <Search {...this.props} />
            </div>
		);
	}
}
