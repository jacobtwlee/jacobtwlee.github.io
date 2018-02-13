import React from 'react';

import './Footer.less';

class Footer extends React.Component {
    render() {
        const currentYear = (new Date()).getFullYear();
        return (
            <div className='rc-Footer'>
                {`Copyright © ${currentYear} Jacob Lee`}
            </div>
        )
    }
}

export default Footer