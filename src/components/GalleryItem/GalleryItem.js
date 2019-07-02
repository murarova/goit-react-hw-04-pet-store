import React from 'react';
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

export default GalleryItem;
