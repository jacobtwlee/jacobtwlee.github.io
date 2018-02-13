import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import EmailLink from './EmailLink';

import model from '../../../model/model';

class Contact extends React.Component {
    render() {
        const username = this.props.data.profile.email.username;
        const domain = this.props.data.profile.email.domain;
        const email = `${username}@${domain}`;

        return (
            <Grid>
                <Row center="xs">
                    <Col xs={12}>
                        <div>You can reach me at</div>
                        <EmailLink email={email} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

Contact.propTypes = {
    data: model.data
};

export default Contact