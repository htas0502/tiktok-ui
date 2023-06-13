// Cài đặt thư viện classnames: 'npm i classnames' trước rồi import vào file này!
// Khi import classnames thì trong đường dẫn hãy thêm '.../bind' vào nhé ( đường dẫn gốc chỉ có 'classnames' thôi. )
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
// Thằng classNames.bind này sẽ giúp bind cái styles này vào, rồi nó sẽ trả ra 1 function tên là cx.
// Thằng cx sẽ cho phép bạn viết classname theo kiểu này: "post-item" thay vì phải camelCase như này: "postItem" ==> nó tiện hơn á!
// Khi viết classname cso dùng cx thì viết như thế này: className = { cx( post-item ) }

console.log(images.logo);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok-logo" />
                </div>

                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder="Search..." spellCheck={false} />
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <span />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* Actions */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
