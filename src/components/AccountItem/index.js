import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/19d7b3f3e52bb39088b60302b206b571~c5_100x100.jpeg?x-expires=1695142800&x-signature=znZncdRECBI%2BK1Sv0DAXV9WPYyk%3D"
                alt="Tai"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van B</span>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvanb</span>
            </div>
        </div>
    );
}

export default AccountItem;
