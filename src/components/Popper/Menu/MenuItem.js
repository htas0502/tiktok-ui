import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button menu classNames={cx('menu-item')} to={data.to}>
            <span className={cx('menu-icon')}>{data.icon}</span>
            <span className={cx('menu-title')}>{data.title}</span>
            <span className={cx('menu-mode')}>{data.button}</span>
        </Button>
    );
}

export default MenuItem;
