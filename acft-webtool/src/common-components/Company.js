import {useLocation, useNavigate} from "react-router-dom";
import TableComponent from "./TableComponent";

export default function Company(){
    const navigate = useNavigate();
    const location = useLocation();
    const company = location.state;
    function redToNew(){
        navigate('/newSMs');
    }

    return (
        <div>
            <h1>Company {company} Records</h1>
            <button onClick={redToNew}>Add SM(s)</button><br/>
            <button>Archive SM(s)</button><br/>
            <button>Modify SM(s)</button><br/>
            <button>Save Changes</button>
            <TableComponent/>
        </div>
    );
}