// Cài đặt thư viện classnames: 'npm i classnames' trước rồi import vào file này!
// Khi import classnames thì trong đường dẫn hãy thêm '.../bind' vào nhé ( đường dẫn gốc chỉ có 'classnames' thôi. )
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItems';

// React
import { useEffect, useState } from 'react';

// Tippy
// import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faPlus,
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faCloudUpload,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
// Thằng classNames.bind này sẽ giúp bind cái styles này vào, rồi nó sẽ trả ra 1 function tên là cx.
// Thằng cx sẽ cho phép bạn viết classname theo kiểu này: "post-item" thay vì phải camelCase như này: "postItem" ==> nó tiện hơn á!
// Khi viết classname cso dùng cx thì viết như thế này: className = { cx( post-item ) }

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        button: 'div...',
    },
];

console.log(images.logo);

function Header() {
    // Logic
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    // User Login (boolean)
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok-logo" />
                </div>

                {/* Search */}
                <Tippy
                    interactive="true"
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <button>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button normal>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
