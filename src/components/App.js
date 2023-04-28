import React, {useState, useEffect} from "react"
import '../App.css';
import Table from "./Table";
import Search from "./Search";
import Form from './Form';

function App() {
  const [appData, setData] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log('once')
    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setData([...appData, ...data ])
      });
  }, []);
  console.log("out Of Effect", appData);

  function addAppData(data){
    setData([...appData, data]);
  }

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
