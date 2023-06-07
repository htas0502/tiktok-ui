// Cài đặt thư viện classnames: 'npm i classnames' trước rồi import vào file này!
// Khi import classnames thì trong đường dẫn hãy thêm '.../bind' vào nhé ( đường dẫn gốc chỉ có 'classnames' thôi. )
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
// Thằng classNames.bind này sẽ giúp bind cái styles này vào, rồi nó sẽ trả ra 1 function tên là cx.
// Thằng cx sẽ cho phép bạn viết classname theo kiểu này: "post-item" thay vì phải camelCase như này: "postItem" ==> nó tiện hơn á!
// Khi viết classname cso dùng cx thì viết như thế này: className = { cx( post-item ) }

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
