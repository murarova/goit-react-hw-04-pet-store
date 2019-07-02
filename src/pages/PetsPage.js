import React, { Component } from 'react';
import pets from '../pets.json';
import Gallery from '../components/Gallery/Gallery';
import styles from '../styles.module.css';

class PetsPage extends Component {
    state = {
        items: pets,
    };

    render() {
        const { items } = this.state;
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Available pets</h2>
                <Gallery items={items} />
            </div>
        );
    }
}

export default PetsPage;
