import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../styles.module.css';

const GalleryItem = ({ name, image, id }) => (
    <div className={styles.item}>
        <Link to={`/pets/${id}`}>
            <img src={image} alt={name} />
            <p className={styles.itemName}>{name}</p>
        </Link>
    </div>
);

GalleryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default GalleryItem;
