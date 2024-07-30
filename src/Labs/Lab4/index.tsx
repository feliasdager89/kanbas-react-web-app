import React from 'react'
import ClickEvent from './ClickEvent'
import PassingDataOnEvent from './PassingDataOnEvent'
import PassingFunctions from './PassingFunctions'
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariables';
import ObjectStateVariables from './ObjectStateVariables';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import ReduxExamples from './ReduxExamples';
import HelloRedux from './ReduxExamples/HelloRedux';
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';
import TodoList from './ReduxExamples/todos/TodoList';


export default function index() {
  function sayHello(){
    alert("Hello");
  }
  return (
    <div>
      <h2>Lab 4</h2>
      <ClickEvent/>
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello}/>
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariables/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <ReduxExamples/>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  )
}