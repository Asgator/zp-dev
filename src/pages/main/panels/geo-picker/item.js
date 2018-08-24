import * as React from 'react';
import { Cell } from '@vkontakte/vkui';

class GeoItem extends React.PureComponent {
    handleClick = (e) => {
        e.preventDefault();

        this.props.onChangeGeo(this.props.geo);
    };
 
	render() {
		return (
			<Cell onClick={this.handleClick}>
				{this.props.children}
			</Cell>
		);
	}
}

export default GeoItem;
