import { create } from 'zustand';
//Store para guardar valores de manera global
const useEventResults = create((set) => ({
    data: [],
    error: null,
    isLoading: false,
    fetchEvents: async (params) => {
        try {
            set(() => ({ isLoading: true }))
            console.log(params)
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_API
                }&countryCode=us${params?.length ? params : ""}`)
            const data = await response.json()
            set(() => ({ data, isLoading: false }))
        } catch (error) {
            setError(error)
        }
    }
}));

export default useEventResults;