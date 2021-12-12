import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import AllFile from './components/AllFile';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Recent from './components/Recent';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Documents from './components/Documents';
import Music from './components/Music';
import WorkProject from './components/WorkProject';

function App() {
return (
<>
  <BrowserRouter>
    <Route exact path="/" component={Welcome}></Route>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/allfile" component={AllFile}></Route>
    <Route exact path="/videos" component={Videos}></Route>
    <Route exact path="/photos" component={Photos}></Route>
    <Route exact path="/recent" component={Recent}></Route>
    <Route exact path="/settings" component={Settings}></Route>
    <Route exact path="/profile" component={UserProfile}></Route>
    <Route exact path="/signin" component={SignIn}></Route>
    <Route exact path="/signup" component={SignUp}></Route>
    <Route exact path="/documents" component={Documents}></Route>
    <Route exact path="/music" component={Music}></Route>
    <Route exact path="/work" component={WorkProject}></Route>
  </BrowserRouter>
</>
);
}

export default App;