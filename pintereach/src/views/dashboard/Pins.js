// react imports
import React, { Component } from 'react';
// redux imports
import { connect } from 'react-redux';
// component imports
import Pin from './Pin';
// styled components imports
import styled from 'styled-components';

// styled components
    // pins structure
const PinsContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const PinsContent = styled.div`
    width: 1200px;
    margin: 0 auto;
`

class Pins extends Component {
    render() {
        console.log('[STATECHECK]', this.props.pins);
        return (
            <PinsContainer>
                <PinsContent>
                    {this.props.pins.map(pin => {
                        return <Pin key={pin.id} name={pin.article_label} url={pin.url} boardId={pin.board_id} />
                    })}
                </PinsContent>
            </PinsContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
        pins: state.articles
    }
};

export default connect(mapStateToProps, {})(Pins);