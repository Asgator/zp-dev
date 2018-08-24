import * as React from 'react';
import { View, Panel } from '@vkontakte/vkui';

import ListPanel from './panels/list';
import GeoPickerPanel from './panels/geo-picker';

export const PANELS = {
	main: 'main',
	geoPicker: 'geoPicker'
};

class MainPage extends React.Component {
	state = {
		activePanel: PANELS.main
	};

	handleChangePanel = (namePanel) => {
		this.setState({
			activePanel: namePanel
		});
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Panel id={PANELS.main}>
					<ListPanel
						onChangePanel={this.handleChangePanel}
					/>
				</Panel>
				<Panel id={PANELS.geoPicker}>
					<GeoPickerPanel
						onChangePanel={this.handleChangePanel}
					/>
				</Panel>
			</View>
		);
	}
}

export default MainPage;
