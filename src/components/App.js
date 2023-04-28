import React, {useState, useEffect} from "react"
import '../App.css';
import Table from "./Table";
import Search from "./Search";
import Form from './Form';

function App() {
  const [appData, setData] = useState([]);
  const [search, setSearch] = useState("")

// Fetch data
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => {
        setData([...appData, ...data ])
      });
  }, []);

  // Add new data to appData
  function addAppData(data){
    setData([...appData, data]);
  }

  // Filter data before passing as props
  const dataToPass = appData.filter(data => data.description.includes(search))
  

  return (
    <>
      <h3 className="title">The Royal Bank of FlatIron</h3>
      <div className="App">
      <Search search={search} onChangeSearch={setSearch}/>
      <Form onAddData={addAppData}/>
      <Table data={ dataToPass } onAddData={addAppData}/>
    </div>
    </>  
  );
}

export default App;
