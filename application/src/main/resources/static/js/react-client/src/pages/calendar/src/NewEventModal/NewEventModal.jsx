import React from "react";

export const NewEventModal = () => {
    return(
        <>
        <div id = "newEventModal">
            <h2>New Event</h2>

            <input id = "eventTitleInput" placeholder = "Event Title" />

            <button id = "saveButton">Save</button>
            <button id = "cancelButton">Cancel</button>

        </div>

        <div id = "modalBackDrop"></div>
        </>
    );
}