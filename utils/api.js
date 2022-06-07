import axios from 'axios';
import {Platform} from "react-native";

const ip = Platform.OS === 'android' ? '10.0.2.2' : '192.168.0.122';
const apiURL = `https://${ip}:8000/m/list`;
//const apiURL = "https://10.0.2.2:8000/m/list";//


export function apiGetExpenses() {
    console.log("calling...",apiURL,Platform.OS);
    axios.get("https://andes.group/login").then(res=>{
        console.log(res)
    }).catch(error=>{
        console.log(error);
    });
}