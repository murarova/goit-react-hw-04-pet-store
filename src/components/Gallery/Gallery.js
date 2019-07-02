import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import imageNotFound from '../../img/imageNotFound.jpg';
import styles from '../../styles.module.css';

const Gallery = ({ items }) => (
    <div className={styles.container}>
        {items.map(item => (
            <GalleryItem
                key={item.id}
                id={item.id}
                name={item.name}
                age={item.age}
                breed={item.breed}
                gender={item.gender}
                color={item.color}
                image={imageNotFound}
                description={item.description}
            />
        ))}
    </div>
);

export default Gallery;
