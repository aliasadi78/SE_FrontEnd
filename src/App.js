import './App.css';
import React, {Component} from 'react';
import SignIn from "./Component/User/SignIn";
import VerifyEmail from "./Component/User/verifyEmail";
import SignUpConsultant from "./Component/User/SignUpConsultant";
import SignUpUser from "./Component/User/SignUpUser";
import EditProfile from './Component/User/Profile/EditProfile';
import Profile from './Component/User/Profile/Profile';
import MainPage from './Component/MainPage/MainPage';
import Channels from './Component/MainPage/Channels';
import Settings from './Component/MainPage/Settings';
import Dashboard from './Component/Dashboard/Dashboard';
import GroupingChannel from './Component/GroupingChannel/GroupingChannel';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateChannel from "./Component/Channel/CreateChannel";
import Channel from "./Component/Channel/ChannelPage";
import Reservation from "./Component/Reservation/ReservationPage";
import Direct from "./Component/Direct/DirectPage";
import VideoChat from "./Component/VideoChat/VideoChatPage";
import Home from './Component/LandingPage/Home';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/SignUpConsultant" component={SignUpConsultant}/>
                    <Route path="/SignUpUser" component={SignUpUser}/>
                    <Route path="/VerifyEmail" component={VerifyEmail}/>
                    <Route path="/CreateChannel" exact component={CreateChannel}/>
                    <Route path="/Channel/:channelId" children={<Dashboard title={'داشبورد'} />} component={Channel}/>
                    <Route path="/VideoChat/:consultantTimeId" children={<Dashboard title={'داشبورد'} />} component={VideoChat}/>
                    <Route path="/Dashboard" children={<Dashboard title={'داشبورد'} />} component={MainPage}/>
                    <Route path="/EditProfile" children={<Dashboard title={'پروفایل'}/>} component={EditProfile}/>
                    <Route path="/Profile/:username" children={<Dashboard title={'پروفایل'}/>} component={Profile}/>
                    <Route path="/Channels" children={<Dashboard title={'کانال ها'}/>} component={Channels}/>
                    <Route path="/GroupingChannel" children={<Dashboard title={'دسته بندی'}/>} component={GroupingChannel}/>
                    <Route path="/Calendar" children={<Dashboard title={'داشبورد'} />} component={Reservation} />
                    <Route path="/Direct/:AddressUsername" children={<Dashboard title={'داشبورد'} />} component={Direct}/>
                    <Route path="/Direct" exact children={<Dashboard title={'داشبورد'} />} component={Direct}/>
                     {/*<Route path="/Dashboard"  component={Dashboard}/>*/}
                </Router>
            </div>
        );
    }
}

export default App;
