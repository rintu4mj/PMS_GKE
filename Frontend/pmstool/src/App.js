import './App.css';
import ManageProject from './Components/Project/ManageProject';
import ProjectForm from './Components/Project/ProjectForm';
import {

  Routes,
  Route,
} from "react-router-dom";
import NoPage from './Components/Project/NoPage';
import LoginPage from './Components/LoginModule/LoginPage';
import SignUp from './Components/LoginModule/SignUp';

function App() {
  return (




    <Routes>

      <Route exact path="/addProject" element={<ProjectForm />} />
      <Route exact path="/dashboard" element={<ManageProject />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route
        exact path="*"
        element={
          // <main style={{ padding: "1rem" }}>
          //   <p>There's nothing here!</p>
          // </main>
          <LoginPage/>
        }
      />
      

    </Routes>



  );
}

export default App;
