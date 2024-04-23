import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b2080dc0bfda1ddb8b23053480f3ecad.jpeg?lk3s=a5d48078&x-expires=1714050000&x-signature=QDS1DgmxQSiv%2Bg5Zf9XN5BEOEds%3D"
                alt=""
            ></img>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quynhalee</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quỳnh Alee</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
