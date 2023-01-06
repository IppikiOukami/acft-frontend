import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getAllSMs = async () => {
    let resp;
    await instance
        .get("/SMs/getAllSMs")
        .then(response => {
            resp = response.data;
        })
        .catch(err =>
        console.log(err));
    return resp;
};

export function getCompany(letter){
    instance.get("/SMs/companies?letter="+letter).then(
        (response) => {
            if(response.data !== "none"){
                return response.data.replace("[").replace("]").split(",");
            }else{
                return [];
            }
        }
    )
}

export function addSMs(SMs){
    console.log(SMs);
    instance.post('/SMs/addSMs?SMs='+SMs+'&len='+SMs.length)
        .then(
            (response) => {
                console.log(response);
                return response.status === 200;

            })
        .catch(
            (error) => {
                console.log(error);
                return false;
            })
    return true;
}

export function archiveRecords(ids){

}

export function modifyRecords(records){

}