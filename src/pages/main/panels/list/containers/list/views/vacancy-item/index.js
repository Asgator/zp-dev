import * as React from 'react';
import { colors, Link, Group } from '@vkontakte/vkui';
import get from 'lodash/get';
import dateElapsed from '@zp/utils-js/lib/date-elapsed';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';

import './styles.css';

export default class VacancyItem extends React.PureComponent {
	render() {
        const { vacancy } = this.props;
        const companyTitle = get(vacancy, 'company.title');
        const cityTitle = get(vacancy, 'contact.city.title');
        
		return (
            <Group
                className="vacancy-item"
                style={{ color: colors.mutedBlack }}
            >
                <Link
                    className="vacancy-item-header"
                >
                    {vacancy.header} {vacancy.is_premium && <Icon16Fire fill={colors.orange} />}
                </Link>

                {(vacancy.is_premium || vacancy.is_upped) && <div
                    className="vacancy-item-left-panel"
                    style={{ backgroundColor: colors.orange }}
                />}

                <div className="vacancy-item-salary vacancy-item-sub-text">
                    {vacancy.salary}
                </div>

                {companyTitle && <div className="vacancy-item-company-name vacancy-item-sub-text">
                    {companyTitle}
                </div>}

                <div
                    className="vacancy-item-sub-text"
                    style={{
                        color: colors.lightGray
                    }}
                >
                    {dateElapsed(vacancy.mod_date || '')} {cityTitle && <span className="vacancy-item-city">{cityTitle}</span>}
                </div>
            </Group>
		);
	}
}
