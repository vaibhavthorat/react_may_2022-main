import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../aboutus/AboutUs";
import AjaxDemo1 from "../ajax/AjaxDemo1";
import AjaxDemo2 from "../ajax/AjaxDemo2";
import AjaxDemo3 from "../ajax/AjaxDemo3";
import AjaxDemo4 from "../ajax/AjaxDemo4";
import AjaxDemo5 from "../ajax/AjaxDemo5";
import Careers from "../careers/Careers";
import ContractJobs from "../careers/ContractJobs";
import PermanentJobs from "../careers/PermanentJobs";
import ConditionalDemo1 from "../Conditional/ConditionalDemo1";
import ConditionalDemo2 from "../Conditional/ConditionalDemo2";
import Addition1 from "../events/Addition1";
import Addition2 from "../events/Addition2";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import SyntheticEventDemo from "../events/SyntheticEventDemo";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo3 from "../form/FormDemo3";
import ClickCounter from "../HOC/ClickCounter";
import ClickCounterWithHOC from "../HOC/ClickCounterWithHOC";
import HoverCounter from "../HOC/HoverCounter";
import HoverCounterWithHOC from "../HOC/HoverCounterWithHOC";
import Home from "../home/Home";
import GetSnapShotDemo1 from "../hooks/GetSnapShotDemo1";
import UseEffectDemo1 from "../hooks/UseEffectDemo1";
import UseRefDemo1 from "../hooks/UseRefDemo1";
import UseRefDemo2 from "../hooks/UseRefDemo2";
import LifecycleDemo1 from "../LifeCycleHooks/LifecycleDemo1";
import ListDemo1 from "../ListItems/ListDemo1";
import ListDemo2 from "../ListItems/ListDemo2";
import ListDemo3 from "../ListItems/ListDemo3";
import MemoDemo1 from "../memo/MemoDemo1";
import NotFound from "../notfound/NotFound";
import Parent from "../parent/Parent";
import ProductDetails from "../productlist/ProductDetails";
import ProductDetails2 from "../productlist/ProductDetails2";
// import ProductList from "../productlist/ProductList";
import Greet from "../props/Greet";
import LocalVariableDemo1 from "../props/LocalVariableDemo1";
import LocalVariableDemo2 from "../props/LocalVariableDemo2";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import CounterDemo4 from "../state/CounterDemo4";
import ModalDemo1 from "../state/ModalDemo1";
import ModalDemo2 from "../state/ModalDemo2";
import SearchDemo1 from "../state/SearchDemo1";
import SweetAlertDemo1 from "../state/SweetAlertDemo1";
import "./Main.css";

const ProductList = React.lazy(() => import("../productlist/ProductList"));

export default class Main extends React.Component {
  state = { flag: true };
  render() {
    return (
      <div className="main">
        {/* This is main component-{React.version} */}
        {/* <ConditionalDemo1></ConditionalDemo1> */}
        {/* <ConditionalDemo2></ConditionalDemo2> */}
        {/* <ListDemo1></ListDemo1> */}
        {/* <ListDemo2></ListDemo2> */}
        {/* <ListDemo3></ListDemo3> */}
        {/* <LocalVariableDemo1></LocalVariableDemo1>
        <LocalVariableDemo2></LocalVariableDemo2> */}
        {/* <Greet name="sanjay" msg="good morning"></Greet>
        <Greet name="mohit" msg="good evening"></Greet>
        <Greet name="Rushikesh">
          <div>HTML Content from Parent</div>
        </Greet> */}
        {/* <CounterDemo1></CounterDemo1> */}
        {/* <CounterDemo2></CounterDemo2> */}
        {/* <CounterDemo3></CounterDemo3> */}
        {/* <CounterDemo4></CounterDemo4> */}
        {/* <SweetAlertDemo1></SweetAlertDemo1> */}
        {/* <ModalDemo1></ModalDemo1> */}
        {/* <ModalDemo2></ModalDemo2> */}
        {/* <SearchDemo1></SearchDemo1> */}
        {/* <EventDemo1></EventDemo1> */}
        {/* <EventDemo2></EventDemo2> */}
        {/* <EventDemo3></EventDemo3> */}
        {/* <Addition1></Addition1> */}
        {/* <Addition2></Addition2> */}
        {/* <SyntheticEventDemo></SyntheticEventDemo> */}
        {/* <Parent></Parent> */}
        {/* <MemoDemo1></MemoDemo1> */}
        {/* <ClickCounter></ClickCounter>
        <br></br>
        =============================================
        <HoverCounter></HoverCounter> */}
        {/* <ClickCounterWithHOC></ClickCounterWithHOC>
        <HoverCounterWithHOC></HoverCounterWithHOC> */}
        {/* <LifecycleDemo1 color={"blue"}></LifecycleDemo1> */}
        {/* {this.state.flag ? <UseEffectDemo1 /> : null}
        <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Click me
        </button> */}
        {/* <GetSnapShotDemo1 /> */}
        {/* <UseEffectDemo1></UseEffectDemo1> */}
        {/* <UseRefDemo1></UseRefDemo1> */}
        {/* <UseRefDemo2></UseRefDemo2> */}
        {/* <FormDemo1 /> */}
        {/* <FormDemo2 /> */}
        {/* <FormDemo3 /> */}
        {/* <AjaxDemo1 /> */}
        {/* <AjaxDemo2 /> */}
        {/* <AjaxDemo3/> */}
        {/* <AjaxDemo4/> */}
        {/* <AjaxDemo5 /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/aboutus" element={<AboutUs />}></Route>
            <Route exact path="/careers" element={<Careers />}>
              <Route index element={<PermanentJobs />} />
              <Route path="permanent" element={<PermanentJobs />} />
              <Route path="contract" element={<ContractJobs />} />
            </Route>
            <Route
              exact
              path="/productlist"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              exact
              path="/productdetails/:id"
              element={<ProductDetails />}
            ></Route>
            <Route
              exact
              path="/productdetails"
              element={<ProductDetails2 />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </div>
    );
  }
}
