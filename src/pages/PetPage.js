/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import pets from '../pets.json';
import styles from '../styles.module.css';
import imageNotFound from '../img/imageNotFound.jpg';

const PetPage = props => {
    const { id } = props.match.params;
    const pet = pets.find(item => item.id === id);
    const { name, breed, age, gender, color, description } = pet;

    return (
        <div className={styles.page}>
            <button className={styles.button} type="button">
                ⬅ Return
            </button>
            <h2 className={styles.title}> All about {name}</h2>
            <div className={styles.pageItem}>
                <div className={styles.pageItemInfo}>
                    <div className={styles.pageImgWrapper}>
                        <img src={imageNotFound} alt={`pet ${breed}`} />
                    </div>
                    <div className={styles.pageInfo}>
                        <p className={styles.pageInfoItem}>
                            <span className={styles.itemInfo}> Age: </span>
                            {age}
                        </p>
                        <p className={styles.pageInfoItem}>
                            <span className={styles.itemInfo}>Gender:</span>{' '}
                            {gender}
                        </p>
                        <p className={styles.pageInfoItem}>
                            <span className={styles.itemInfo}>Color:</span>{' '}
                            {color}
                        </p>
                        <p className={styles.pageInfoItem}>
                            <span className={styles.itemInfo}>Breed:</span>{' '}
                            {breed}
                        </p>
                    </div>
                </div>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
    );
};

export default PetPage;
