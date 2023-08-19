import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]); // history vốn dĩ là 1 cái mảng vì initState để là []
    const current = history[history.length - 1]; // Luôn lấy phần tử cuối mảng!

    const renderItems = () => {
        return current.data.map((item, index) => {
            // check Parent : Boolean
            const isParent = !!item.children;

            // Handler
            const handleClick = () => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children]); // Render item.children. Vì item.children là phần tử cuối mảng.
                } else {
                    onChange(item);
                }
            };

            return <MenuItem key={index} data={item} onClick={handleClick} />;
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            // visible
            delay={[5, 500]}
            offset={[15, 10]}
            interactive
            hideOnClick="false"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={handleBack} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
