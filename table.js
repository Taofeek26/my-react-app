import "./table.css";

function Table({ bioData }){
    return(
        <table className= "table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {bioData.map((data, index) => {
                return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.firstname.toUpperCase()}, {data.middlename} {data.lastname}</td>
                        <td>{data.email}</td>
                        <td>{data.discipline}</td>
                        <td>{data.phones}</td>
                    </tr>
                );
                })}
             </tbody>
        </table>
    );
}

export default Table;