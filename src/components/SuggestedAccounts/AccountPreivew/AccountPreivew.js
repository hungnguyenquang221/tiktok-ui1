import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8bad51d109b3cef188f1ef6a2e920044~c5_100x100.jpeg?x-expires=1697558400&x-signature=ycRBHA5RibCFhrzL0G%2FKkllz0xk%3D"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} snmall primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    hungnguyenquang <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>NguyenHung</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>12.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>12.9M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
