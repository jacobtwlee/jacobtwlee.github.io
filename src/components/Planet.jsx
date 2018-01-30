import React from 'react';
import PropTypes from 'prop-types';

import './Planet.less';

class Planet extends React.Component {
    render() {
        return (
            <div className='rc-Planet' style={{
                height: this.props.orbitDiameter,
                width: this.props.orbitDiameter
            }}>
                <div className='-orbit-ring' />
                <div className='-planet-orbit' style={{
                     "animation-duration": this.props.orbitDuration,
                 }}>
                    <div className='-planet' style={{
                        backgroundColor: this.props.color,
                        height: this.props.planetDiameter,
                        width: this.props.planetDiameter
                    }} />
                    <div className='-planet-shadow' style={{
                        height: Math.max(window.innerHeight, window.innerWidth) / 2,
                        width: this.props.planetDiameter * 3
                    }} />
                </div>
            </div>
        )
    }
}

Planet.propTypes = {
    color: PropTypes.string,
    orbitDiameter: PropTypes.number.required,
    orbitDuration: PropTypes.string.required,
    planetDiameter: PropTypes.number.required,
};

Planet.defaultProps = {
    color: 'white'
};

export default Planet