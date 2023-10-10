import "./App.css";
import Users from "./components/Example/users";
import { DataCards } from "./contex.tsx/data";
import { Link } from 'react-router-dom';

function App() {
  return (
  
    <DataCards>
      <Users />
    </DataCards>
     
  
  );
}

export default App;
