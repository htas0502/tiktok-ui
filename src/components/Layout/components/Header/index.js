// Cài đặt thư viện classnames: 'npm i classnames' trước rồi import vào file này!
// Khi import classnames thì trong đường dẫn hãy thêm '.../bind' vào nhé ( đường dẫn gốc chỉ có 'classnames' thôi. )
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import routesConfig from '~/config/routes';

// React
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// Tippy
// import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faMessage,
    faPaperPlane,
    faUser,
    faBookBookmark,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '~/components/Popper/Menu';
import Search from '../Search';

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
        to: routesConfig.feedback,
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
    // User Login (boolean)
    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    // User Menu
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faBookBookmark} />,
            title: 'Favorite',
            to: routesConfig.favorite,
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: routesConfig.coins,
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: routesConfig.settings,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: routesConfig.home,
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok-logo" />
                </Link>

                {/* SEARCH... */}
                <Search />

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom">
                                <Button normal>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>Upload</span>
                                </Button>
                            </Tippy>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                            <button className={cx('actions-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button normal>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div className={cx('user-avatar')}>
                                <Image
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1691917200&x-signature=JdXRhLPK19Hm1PVwTpPswoksr2w%3D"
                                    alt="User Avatar!"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
