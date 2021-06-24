import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import BuyerDashboard from './components/Buyer/BuyerDashboard/BuyerDashboard';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import IEDashboard from './components/IE/IEDashboard/IEDashboard';
import CADDashboard from './components/CAD/CADDashboard/CADDashboard';
import MarchandiserDash from './components/Marchandiser/MarchandiserDash/MarchandiserDash';
import ProductionDash from './components/Production/ProductionDash/ProductionDash';
import SampleDashboard from './components/Sample/SampleDashboard/SampleDashboard';
import Home from './components/Home/Home';
import SampleInfo from './components/Buyer/SampleInfo/SampleInfo';
import OrderInfo from './components/Buyer/OrderInfo/OrderInfo';

import ManageOrder from './components/Buyer/ManageOrder/ManageOrder';
import AddSupplier from './components/Marchandiser/AddSupplier/AddSupplier';
import ManageSupplier from './components/Marchandiser/ManageSupplier/ManageSupplier';
import ViewSample from './components/ViewSample/ViewSample';
import ViewOrder from './components/ViewOrder/ViewOrder';
import ManageSample from './components/Buyer/ManageSample/ManageSample';
import SampleImg from './components/Sample/SampleImg/SampleImg';
import ManageSampleImg from './components/Sample/ManageSampleImg/ManageSampleImg';
import QntyFabric from './components/CAD/QntyFabric/QntyFabric';
import TimeCost from './components/IE/TimeCost/TimeCost';
import ViewFinalSample from './components/ViewFinalSample/ViewFinalSample';
import ManageTimeCost from './components/IE/ManageTimeCost/ManageTimeCost';
import ManageQntyFab from './components/CAD/ManageQntyFab/ManageQntyFab';
import ProductionImg from './components/Production/ProductionImg/ProductionImg';
import ManageProImg from './components/Production/ManageProImg/ManageProImg';
import ProductTimeCost from './components/IE/ProductTimeCost/ProductTimeCost';
import ProductQntyFab from './components/CAD/ProductQntyFab/ProductQntyFab';
import ViewFinalProduct from './components/ViewFinalProduct/ViewFinalProduct';
import OrderStatus from './components/Marchandiser/OrderStatus/OrderStatus';
import ShowSample from './components/Sample/ShowSample/ShowSample';
import AddBuyer from './components/Marchandiser/AddBuyer/AddBuyer';
import ManageBuyer from './components/Marchandiser/ManageBuyer/ManageBuyer';
import FinalSample from './components/FinalSample/FinalSample';
import ShowProduct from './components/Production/ShowProduct/ShowProduct';
import FinalProduct from './components/FinalProduct/FinalProduct';
import Report from './components/Report/Report';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Payment from './components/Buyer/Payment/Payment';
import FeedBack from './components/Buyer/FeedBack/FeedBack';
import UpdateSupplier from './components/Marchandiser/UpdateSupplier/UpdateSupplier';
import UpdateQnty from './components/CAD/UpdateQnty/UpdateQnty';
import ManageProQnty from './components/CAD/ManageProQnty/ManageProQnty';
import UpdatePQnty from './components/CAD/UpdatePQnty/UpdatePQnty';
import ManagePTime from './components/IE/ManagePTime/ManagePTime';
import UpdateSTime from './components/IE/UpdateSTime/UpdateSTime';
import UpdatePTime from './components/IE/UpdatePTime/UpdatePTime';
import UpdateSimg from './components/Sample/UpdateSimg/UpdateSimg';
import UpdatePimg from './components/Production/UpdatePimg/UpdatePimg';
import FinalProductBuy from './components/Buyer/FinalProductBuy/FinalProductBuy';
import UpdateBuyer from './components/Marchandiser/UpdateBuyer/UpdateBuyer';
export const UserContext = createContext();

axios.defaults.baseURL = 'http://localhost:5000'


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/login">
          <Login></Login>
        </Route>
        <Route path ="/addUser">
          <SignUp></SignUp>
        </Route>
        <PrivateRoute path ="/buyer-dashboard">
          <BuyerDashboard></BuyerDashboard>
        </PrivateRoute>
        <PrivateRoute path ="/IE-dashboard">
          <IEDashboard></IEDashboard>
        </PrivateRoute>
        <PrivateRoute path ="/CAD-dashboard">
          <CADDashboard></CADDashboard>
        </PrivateRoute>
        <PrivateRoute path ="/marchandiser-dashboard">
          <MarchandiserDash></MarchandiserDash>
        </PrivateRoute>
        <PrivateRoute path ="/production-dashboard">
          <ProductionDash></ProductionDash>
        </PrivateRoute>
        <PrivateRoute path ="/sample-dashboard">
          <SampleDashboard></SampleDashboard>
        </PrivateRoute>
        <Route path ="/viewSample">
          <ViewSample></ViewSample>
        </Route>
        <Route path ="/viewOrder">
          <ViewOrder></ViewOrder>
        </Route>
        <Route path ="/viewFiSample/:id">
          <ViewFinalSample></ViewFinalSample>
        </Route>
        <Route path ="/viewFiProduct/:id">
          <ViewFinalProduct></ViewFinalProduct>
        </Route>
        <Route path ="/finalSample">
          <FinalSample></FinalSample>
        </Route>
        <Route path ="/finalProduct">
          <FinalProduct></FinalProduct>
        </Route>

        {/*------------------------ Buyer-------------------------------- */}
        <Route path ="/addSample">
          <SampleInfo></SampleInfo>
        </Route>
        <Route path ="/manageSample">
         <ManageSample></ManageSample>
        </Route>
        <Route path ="/addOrder">
          <OrderInfo></OrderInfo>
        </Route>
        <Route path ="/manageOrder">
          <ManageOrder></ManageOrder>
        </Route>
        <Route path ="/showPayment/:id">
          <Payment></Payment>
        </Route>
        <Route path ="/feedback/:id">
          <FeedBack></FeedBack>
        </Route>
        <Route path ="/viewFiProductBuy/:id">
          <FinalProductBuy></FinalProductBuy>
        </Route>
        {/*------------------------ Marchandiser--------------------------------  */}
        <Route path ="/marchan-dashboard">
          <MarchandiserDash></MarchandiserDash>
        </Route>
        <Route path ="/addSupplier">
          <AddSupplier></AddSupplier>
        </Route>
        <Route path ="/manageSupplier">
          <ManageSupplier></ManageSupplier>
        </Route>
          <Route path ="/editSupplier/:id">
          <UpdateSupplier></UpdateSupplier>
        </Route>
        <Route path ="/viewOrderStatus">
          <OrderStatus></OrderStatus>
        </Route>
        <Route path ="/addBuyer">
          <AddBuyer></AddBuyer>
        </Route>
        <Route path ="/manageBuyer">
          <ManageBuyer></ManageBuyer>
        </Route>
        <Route path ="/editBuyer/:id">
          <UpdateBuyer></UpdateBuyer>
        </Route>
        <Route path ="/report">
          <Report></Report>
        </Route>
        {/* ----------------------------Sample----------------------------------- */}
        <Route path ="/addFSampleImg/:id">
          <SampleImg></SampleImg>
        </Route>
        <Route path ="/manageFSampleImg">
          <ManageSampleImg></ManageSampleImg>
        </Route>
        <Route path ="/editSaimg/:id">
          <UpdateSimg></UpdateSimg>
        </Route>
        <Route path ="/showSample">
          <ShowSample></ShowSample>
        </Route>
          {/* ----------------------------Production----------------------------------- */}
          <Route path ="/addFProImg/:id">
          <ProductionImg></ProductionImg>
        </Route>
        <Route path ="/manageFProImg">
          <ManageProImg></ManageProImg>
        </Route>
        <Route path ="/showOrder">
          <ShowProduct></ShowProduct>
        </Route>
        <Route path ="/editPimg/:id">
          <UpdatePimg></UpdatePimg>
        </Route>

        {/* --------------------------CAD------------------- */}
        <Route path ="/addSQntyFab">
          <QntyFabric></QntyFabric>
        </Route>
        <Route path ="/manageSQntyFab">
          <ManageQntyFab></ManageQntyFab>
        </Route>
        <Route path ="/managePQntyFab">
          <ManageProQnty></ManageProQnty>
        </Route>
        <Route path ="/addProQntyFab">
          <ProductQntyFab></ProductQntyFab>
        </Route>
        <Route path ="/editSaQnty/:id">
          <UpdateQnty></UpdateQnty>
        </Route>
        <Route path ="/editPQnty/:id">
          <UpdatePQnty></UpdatePQnty>
        </Route>
        {/* --------------------------IE-------------------  */}
        <Route path ="/addSTime">
          <TimeCost></TimeCost>
        </Route>
        <Route path ="/manageFSTimeCost">
          <ManageTimeCost></ManageTimeCost>
        </Route>
        <Route path ="/managePTimeCost">
          <ManagePTime></ManagePTime>
        </Route>
        <Route path ="/editSaTime/:id">
          <UpdateSTime></UpdateSTime>
        </Route>
        <Route path ="/editPTime/:id">
          <UpdatePTime></UpdatePTime>
        </Route>
        <Route path ="/addProTime">
          <ProductTimeCost></ProductTimeCost>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
