import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector((state) => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSaveEvent = (calendarEvent) => {
        //TODO: save to db

        //all good

        if (calendarEvent._id) {
            //update
            dispatch(onUpdateEvent(calendarEvent));
        } else {
            //create
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getDate() }));
        }
    }

    return {
        //properties
        events,
        activeEvent,

        //methods
        setActiveEvent,
        startSaveEvent,
    }


}
