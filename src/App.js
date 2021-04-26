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
        {/*------------------------ Marchandiser--------------------------------  */}
        <Route path ="/addSupplier">
          <AddSupplier></AddSupplier>
        </Route>
        <Route path ="/manageSupplier">
          <ManageSupplier></ManageSupplier>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
