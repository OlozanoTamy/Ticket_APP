import { useState } from "react";
import axios from "axios";
import eventsJSON from "../data/events.json"

// const Apikey = "Fs1jewKAmfS3trtMHRzu2cvsdQLS0KGT"
// async function Apillamado() {
//     try {
//         const events = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?${Apikey}`)
//         console.log(events)
//     } catch (error) {
//         console.log(error)
//     }
// }



// Apillamado();

console.log(import.meta.env)
const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState();


    const fetchEvents = async (params) => {
        try {
            console.log(params)
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_API
                }&countryCode=us${params?.length ? params : ""}`)
            const data = await response.json()
            setData(data)
            setIsloading(false)
        } catch (error) {
            setError(error)
        }
    }

    return {
        events: data._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents,
    }
};

export default useEventsData;