import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            <span style={{fontSize: '14px'}} >Status:</span >
            {!editMode &&
                <div onClick={activateEditMode}> {status || 'No status'}</div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;