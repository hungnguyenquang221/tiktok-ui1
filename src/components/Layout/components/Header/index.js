import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
            </div>
            <div className={cx('search')}>
                <input placeholder="Search account and videos" spellCheck={false} />
                <button className={cx('clear')}></button>

                <button className={cx('search-button')}></button>
            </div>
        </header>
    );
}

export default Header;
