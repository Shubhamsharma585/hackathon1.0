import React from "react";
import { useHistory } from "react-router-dom";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    const history = useHistory()
    function create() {
        const id = uuid();
        history.push(`/room/${id}`);
    }

    return (
        <button onClick={create}>Create room</button>
    );
};

export default CreateRoom;
