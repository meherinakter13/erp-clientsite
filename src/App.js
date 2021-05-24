import React from 'react';
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
import ViewStatus from './components/Buyer/ViewStatus/ViewStatus';
import ShowSample from './components/Sample/ShowSample/ShowSample';
import AddBuyer from './components/Marchandiser/AddBuyer/AddBuyer';
import ManageBuyer from './components/Marchandiser/ManageBuyer/ManageBuyer';
import FinalSample from './components/FinalSample/FinalSample';
import ShowProduct from './components/Production/ShowProduct/ShowProduct';
import FinalProduct from './components/FinalProduct/FinalProduct';
import Report from './components/Report/Report';

axios.defaults.baseURL = 'http://localhost:5000'

function App() {
  return (
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
        <Route path ="/buyer-dashboard">
          <BuyerDashboard></BuyerDashboard>
        </Route>
        <Route path ="/IE-dashboard">
          <IEDashboard></IEDashboard>
        </Route>
        <Route path ="/CAD-dashboard">
          <CADDashboard></CADDashboard>
        </Route>
        <Route path ="/marchandiser-dashboard">
          <MarchandiserDash></MarchandiserDash>
        </Route>
        <Route path ="/production-dashboard">
          <ProductionDash></ProductionDash>
        </Route>
        <Route path ="/sample-dashboard">
          <SampleDashboard></SampleDashboard>
        </Route>
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
        <Route path ="/viewStatus">
          <ViewStatus></ViewStatus>
        </Route>
        {/*------------------------ Marchandiser--------------------------------  */}
        <Route path ="/addSupplier">
          <AddSupplier></AddSupplier>
        </Route>
        <Route path ="/manageSupplier">
          <ManageSupplier></ManageSupplier>
        </Route>
        <Route path ="/viewOrderStatus">
          <OrderStatus></OrderStatus>
        </Route>
        <Route path ="/addStatus/:id">
          <OrderStatus></OrderStatus>
        </Route>
        <Route path ="/addBuyer">
          <AddBuyer></AddBuyer>
        </Route>
        <Route path ="/manageBuyer">
          <ManageBuyer></ManageBuyer>
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
        {/* --------------------------CAD------------------- */}
        <Route path ="/addSQntyFab">
          <QntyFabric></QntyFabric>
        </Route>
        <Route path ="/manageSQntyFab">
          <ManageQntyFab></ManageQntyFab>
        </Route>
        <Route path ="/addProQntyFab">
          <ProductQntyFab></ProductQntyFab>
        </Route>
        {/* --------------------------IE-------------------  */}
        <Route path ="/addSTime">
          <TimeCost></TimeCost>
        </Route>
        <Route path ="/manageFSTimeCost">
          <ManageTimeCost></ManageTimeCost>
        </Route>
        <Route path ="/addProTime">
          <ProductTimeCost></ProductTimeCost>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
