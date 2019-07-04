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
    name: PropTypes.string,
    breed: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    onGoBack: PropTypes.func,
};

Pet.defaultProps = {
    name: '',
    breed: '',
    age: null,
    gender: '',
    color: '',
    description: '',
    image: '',
    onGoBack: () => {},
};

export default Pet;
