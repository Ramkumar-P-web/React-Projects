import { createContext,useEffect,useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props)=>{

    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    });

    const[ isSearched , setIsSearched] = useState(false);
    
    const [jobs,setJobs] = useState([]);

    const [recruiterLogin,setRecruiterLogin] = useState(false);

    //Funtionc to fetch jobs
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    //useEffect to render data

    useEffect(()=>{
        fetchJobs()
    },[])
    
    const value = {setSearchFilter,searchFilter,isSearched,setIsSearched,jobs,setJobs,recruiterLogin,setRecruiterLogin};

    return (<AppContext.Provider value={value}>{props.children}</AppContext.Provider>)
}