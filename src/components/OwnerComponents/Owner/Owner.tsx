import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

const redirectToOwnerDetails = (id: any, history: any) => {
    history.push('/ownerDetails/' + id);
}

const redirectToUpdateOwner = (id: any, history: any) => {
    history.push('/updateOwner/' + id);
}

const redirectToDeleteOwner = (id: any, history: any) => {
    history.push('/deleteOwner/' + id);
}

const Owner = (props: any) => {
    return (
        <Aux>
            <tr>
                <td>{props.owner.name}</td>
                <td><Moment format="DD/MM/YYYY">{props.owner.dateOfBirth}</Moment></td>
                <td>{props.owner.address}</td>
                <td>
                    <Button onClick={() => redirectToOwnerDetails(props.owner.id, props.history)}>Details</Button>
                </td>
                <td>
                    <Button variant="success" onClick={() => redirectToUpdateOwner(props.owner.id, props.history)}>Update</Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => redirectToDeleteOwner(props.owner.id, props.history)}>Delete</Button>
                </td>
            </tr>
        </Aux>
    );
};

export default Owner;