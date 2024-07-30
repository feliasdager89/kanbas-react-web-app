import AddingRemovingThroughArrays from "./AddingRemovingThroughArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Class";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputline from "./ConditionalOutputline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JSONStringify from "./JSONStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import TodoList from "./todos/TodoList";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

import { useSelector } from "react-redux";



export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
    return (
      <div>
        <h2>Lab 3</h2>
        <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />

        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength/>
        <AddingRemovingThroughArrays/>
        <ForLoops/>
        <MapFunction/>
        <FindFunction/>
        <FilterFunction/>
        <JSONStringify/>
        <House/>
        <TodoList/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>
        <DestructingImports/>
        <Classes/>
        <Styles/>
        <Add a={3} b={4} />
         <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
      </div>
    );
  }
  
  