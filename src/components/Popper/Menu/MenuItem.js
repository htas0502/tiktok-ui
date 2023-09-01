import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button menu classNames={classes} to={data.to} onClick={onClick}>
            <span className={cx('menu-icon')}>{data.icon}</span>
            <span className={cx('menu-title')}>{data.title}</span>
            <span className={cx('menu-mode')}>{data.button}</span>
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
