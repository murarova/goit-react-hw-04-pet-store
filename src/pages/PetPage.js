/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import pets from '../pets.json';
import Pet from '../components/Pet/Pet';

const findPageId = props => props.match.params.id;

class PetPage extends Component {
    state = {
        pet: null,
    };

    componentDidMount() {
        const id = findPageId(this.props);
        this.setState({ pet: this.findPet(id) });
    }

    findPet = id => {
        const pet = pets.find(item => item.id === id);
        return pet || this.props.history.push('/');
    };

    handleGoBack = () => this.props.history.push('/pets');

    render() {
        const { pet } = this.state;

        return <Pet {...pet} onGoBack={this.handleGoBack} />;
    }
}

export default PetPage;
