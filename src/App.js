import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
//import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
//import Word from "./component/Word";

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path = "/" element = {<DayList />}/>
          <Route path = "/day/:day" element = {<Day/>} />
          <Route path = "/create_word" element = {<CreateWord />} />
          <Route path = "/create_day" element = {<CreateDay />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
세 번째 Route인 path가 없는 EmptyPage는
앞의 두 Route에 모두 해당되지 않을 경우들을 전부 가짐.
따라서 맨 첫번째로 위치할 경우 모든 페이지 경로들이 저기로 빠짐. 

<Route path = "/create_word" element = {<CreateWord />} />
          <Route path = "/create_day" element = {<CreateDay />} />
*/