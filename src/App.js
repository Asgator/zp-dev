import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as VKConnect from '@vkontakte/vkui-connect';
import { ConfigProvider } from '@vkontakte/vkui';
import { isWebView } from '@vkontakte/vkui/src/lib/webview';
import '@vkontakte/vkui/dist/vkui.css';
import isEmpty from 'lodash/isEmpty';

import { detectGeo } from 'actions/geo';

import MainPage from './pages/main';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: {},
		};
	}

	componentDidMount() {
		if (!this.props.hasCurrentGeo) {
			this.props.actions.detectGeo();
		}

		VKConnect.subscribe((e) => {
			if (!e.detail) {
			} else if (e.detail.type === 'VKWebAppGetUserInfoResult') {
				this.setState({
					fetchedUser: {
						...e.detail.data 
					},
				});
			}
		});

		VKConnect.send('VKWebAppInit', {});
		VKConnect.send('VKWebAppGetUserInfo', {});
	}

	render() {
		return (
			<ConfigProvider isWebView={isWebView}>
				{this.props.hasCurrentGeo && <MainPage />}
			</ConfigProvider>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
		detectGeo
    }, dispatch)
});

const mapStateToProps = (state) => ({
	hasCurrentGeo: !isEmpty(state.currentGeo.data)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
