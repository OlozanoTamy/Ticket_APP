import { useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../utils/constants"
//Este es un hook que sirve para saber si el elemento esta cliqueado o no

//Se crea una variable para guardar en el local storage


const checkIsEventLiked = (eventId) => {
    //Se evalua si el array contiene el eventID
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    return likedEvents.includes(eventId);
}

const useLikeEvent = (eventId) => {
    //Un manejador de estado recive un true o false
    const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId));
    //Funcion para saber si se esta likeado o no
    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        ////saber si contiene el event id
        const eventIndex = likedEvents.indexOf(eventId);
        if (eventIndex !== -1) {
            // const updatedLikedEvents = [...likedEvents.slice(0, eventIndex), ...likedEvents.slice(eventIndex + 1)];
            likedEvents.splice(eventIndex, 1)
            // localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(updatedLikedEvents));
            setIsEventLiked(false);
        } else {
            // const updatedLikedEvents = [...likedEvents, eventId];
            // localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(updatedLikedEvents));
            likedEvents.push(eventId);
            setIsEventLiked(true);
        }
        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    }

    return {
        isEventLiked,
        toggleEventLike
    };
}

export default useLikeEvent;
