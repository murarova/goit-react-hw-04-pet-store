/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import pets from '../pets.json';
import Pet from '../components/Pet/Pet';

const findPageId = props => props.match.params.id;
const findPet = id => pets.find(item => item.id === id);

class PetPage extends Component {
    state = {
        pet: null,
    };

    componentDidMount() {
        const id = findPageId(this.props);
        this.setState({ pet: findPet(id) });
    }

    handleGoBack = () => this.props.history.push('/pets');

    render() {
        const { pet } = this.state;

        return (
            <div>{pet && <Pet {...pet} onGoBack={this.handleGoBack} />}</div>
        );
    }
}

export default PetPage;
