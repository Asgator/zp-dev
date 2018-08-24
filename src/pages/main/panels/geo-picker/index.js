import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PanelHeader, HeaderButton, List, platform, IOS } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import debouce from 'lodash/debounce';

import { changeCurrentGeo } from 'actions/geo';

import Search from 'components/modules/search';

import { apiV1 } from 'utils/api-client';

import { PANELS } from 'pages/main';

import GeoItem from './item';

const osname = platform();

let initList = [];

class GeoPickerPanel extends React.Component {
    _isMounted = false

    state = {
        list: initList,
        value: ''
    };

    componentDidMount() {
        this._isMounted = true;

        apiV1.get('geo', { limit: 18 }).then(
            (response) => {
                if (!this._isMounted) {
                    return;
                }

                initList = response.geo;

                this.setState({
                    list: response.geo
                });
            },
            () => {}
        );
    }

    componentWillUnmount() {
        this._isMounted = false;

        this.fetchGeo.cancel();
    }

    handleSearch = (value) => {
        this.setState({
            value
        });

        this.fetchGeo(value);
    }

    fetchGeo = debouce((search = '') => {
        apiV1.get('geo', { q: search, limit: 18 }).then(
            (response) => {
                if (!this._isMounted) {
                    return;
                }

                this.setState({
                    list: response.geo
                });
            },
            () => {}
        )
    }, 200)

    handleChangePanel = (e) => {
        e.preventDefault();

        this.props.onChangePanel(PANELS.main);
    };

    handleChangeGeo = (geo) => {
        this.props.actions.changeCurrentGeo(geo);

        this.props.onChangePanel(PANELS.main);
    };
 
    renderBackButton() {
        return (
            <HeaderButton
                onClick={this.handleChangePanel}
            >
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>
        )
    }

    renderItem = (geo) => {
        return (
            <GeoItem
                key={geo.id}
                geo={geo}
                expandable
                onChangeGeo={this.handleChangeGeo}
            >
                {geo.name}
            </GeoItem>
        )
    }

	render() {
		return (
			<React.Fragment>
				<PanelHeader
                    noShadow
                    theme="light"
                    left={this.renderBackButton()}
                >
                    Выбор города
                </PanelHeader>
                <Search
                    value={this.state.value}
                    onChange={this.handleSearch}
                />
                <List>
                    {this.state.list.map(this.renderItem)}
                </List>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
		changeCurrentGeo
    }, dispatch)
});

export default connect(null, mapDispatchToProps)(GeoPickerPanel);
