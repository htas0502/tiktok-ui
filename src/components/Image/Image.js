import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState();

    const handleError = function () {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default forwardRef(Image);
