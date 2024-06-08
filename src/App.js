import './App.css'
import Login from './custom components/Login';
import Navbar from './custom components/Navbar'

function App() {
  //only import the navbar function component file, no need to add whole code
  return (
    <>
      <Navbar title="Notes Distribution Center" />  
      <div className="container mt-3 d-flex justify-content-center align-items-center">
        <Login/>
      </div>
      
    </>
  );
}
export default App;