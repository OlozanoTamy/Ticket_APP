import { useState, useRef, useEffect } from "react";
import eventsJSON from "../data/events.json"

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState();
    useEffect(() => {
        setTimeout(() => {
            try {
                setData(eventsJSON)
                setIsloading(false)
            } catch (error) {
                setError(error);
            }
        }, 4000)
    }, [])
    return {
        events: data._embedded?.events || [],
        isLoading,
        error,
    }
};

export default useEventsData;