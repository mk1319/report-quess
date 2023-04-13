import "./table.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    await axios
      .get("http://api.tradebook.in.net/v1/user/refer-data-quess")
      .then((res) => {
        if (res.data) {
          if (Array.isArray(res.data.data)) {
            setTableData(res.data.data.reverse());
          }
        }
      });
  }

  return (
    <div className="container">
      <button>Refresh</button>
      <div className="table-container">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={data.email}>
                  <td>{index + 1}</td>
                  <td>{data.first_name + " " + data.last_name}</td>
                  <td>{data.email}</td>
                  <td className="fixed-right">{data.mobile_number}</td>
                  <td>{data.created_date?.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
