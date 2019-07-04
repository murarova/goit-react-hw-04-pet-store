import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.module.css';

const Pet = ({
    name,
    breed,
    age,
    gender,
    color,
    description,
    image,
    onGoBack,
}) => (
    <div className={styles.page}>
        <button className={styles.button} onClick={onGoBack} type="button">
            ⬅ Return
        </button>
        <h2 className={styles.title}> All about {name}</h2>
        <div className={styles.pageItem}>
            <div className={styles.pageItemInfo}>
                <div className={styles.pageImgWrapper}>
                    <img src={image} alt={`pet ${breed}`} />
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
                        <span className={styles.itemInfo}>Color:</span> {color}
                    </p>
                    <p className={styles.pageInfoItem}>
                        <span className={styles.itemInfo}>Breed:</span> {breed}
                    </p>
                </div>
            </div>
            <p className={styles.desc}>{description}</p>
        </div>
    </div>
);

Pet.propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onGoBack: PropTypes.func.isRequired,
};

export default Pet;
