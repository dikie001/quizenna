
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useAsyncStorage=<T>(key: string, initialValue: T)=>{
    const [storedValue, setStoredValue]=useState<T>(initialValue);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        const loadData=async()=>{
            setLoading(true)
            try{
                const jsonValue = await AsyncStorage.getItem(key);
                if(jsonValue !== null){
                    setStoredValue(JSON.parse(jsonValue))
                }

            }catch(err){
                console.error("AsyncStorage error:", err)
            }finally{
                setLoading(false);
            }
        }
        loadData()
    },[key])
    return {storedValue, loading}
}