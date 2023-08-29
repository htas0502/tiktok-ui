import PropTypes from 'prop-types';
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
    menu,

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
        // [className]: className,
        normal,
        iconic,
        primary, // enhanced object literal... Khi prop Primary này đc truyền vào, thì classes sẽ add thêm con className = 'primary' này vào button (... vào thằng Comp ấy.)
        outline, // Y chang primary.
        disabled,
        rounded,
        menu,

        small,
        large,
        iconSize_one,
    });

    return (
        <Comp className={classes} {...props}>
            {/* {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} */}
            <span>{children}</span>
            {/* {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} */}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    normal: PropTypes.bool,
    primary: PropTypes.bool,
    iconic: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    iconSize_one: PropTypes.bool,
    menu: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
