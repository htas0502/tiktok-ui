import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    // Links to...
    to,
    href,

    // Button Types
    normal,
    primary,
    iconic,
    outline,
    disabled,
    rounded,

    // Button Sizes
    small,
    large,
    iconSize_one,

    // Events
    onClick,

    // Props
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        passProps,
    };

    // Loại bỏ Event Listener nếu nút đó bị Disabled.
    // Cách 1:
    // if (disabled) {
    //     delete props.onClick;
    // }

    // Cách 2:
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // Điều kiện để Button nó là thẻ a trong DOM hay là thẻ Link trong React Router.
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Classes:
    const classes = cx('wrapper', {
        normal,
        iconic,
        primary, // enhanced object literal... Khi prop Primary này đc truyền vào, thì classes sẽ add thêm con className = 'primary' này vào button (... vào thằng Comp ấy.)
        outline, // Y chang primary.
        disabled,
        rounded,

        small,
        large,
        iconSize_one,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
