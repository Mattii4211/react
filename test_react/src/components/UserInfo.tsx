import { useState } from 'react'
import Form from './Form';
import { Button } from 'react-bootstrap';

function UserInfo(props: any) {
    let [showMoreInfo, setShowMoreInfo] = useState(false);
    let [editForm, setEditForm] = useState(false);

    const buttonEl = <>
        <Button 
            type='button'
            className="btn btn-primary btn-sm p-2 mx-1" 
            onClick={
                () => {
                    setShowMoreInfo(!showMoreInfo)
                }
            }
        >
            {!showMoreInfo ? 'Show' : 'Hide'}
        </Button>
    </>;

    const editBtn = <>
        <Button
            type='button'
            className="btn btn-secondary btn-sm p-2 mx-1" 
            onClick={
                () => {
                    setEditForm(!editForm);
                }
            }
        >
            Edit {!editForm ? 'show' : 'hide'}
        </Button>
    </>;

    const restEl = <>
        <p>{props.tel}</p>
        <p>{props.email}</p>
    </>;

    const editFormEl = <>
        <Form
            onFormSubmit={props.onFormSubmit}
            id={props.id}
            name={props.name}
            tel={props.tel}
            email={props.email}
        />
    </>

    return (
        <>
            <h4>{props.name}</h4>
            <div className="d-grid gap-2 d-md-block">
                {buttonEl}
                {editBtn}
            </div>
            {showMoreInfo && restEl}
            {editForm && editFormEl}
            <hr />
        </>
    );
}

export default UserInfo