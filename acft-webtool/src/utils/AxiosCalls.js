import axios from 'axios';

const baseURL = "http://localhost:8080";

export const getAllSMs = async () => {
    let resp;
    await axios
        .get(baseURL+"/SMs/getAllSMs")
        .then(response => {
            resp = response.data;
            console.log(resp)
        })
        .catch(err =>
        console.log(err));
    return resp;
};

export function getCompany(letter){
    axios.get("/records/companies?letter"+letter).then(
        (response) => {
            if(response.data !== "none"){
                return response.data.replace("[").replace("]").split(",");
            }else{
                return [];
            }
        }
    )
}

export function addRecords(records){

}

export function archiveRecords(ids){

}

export function modifyRecords(records){

}