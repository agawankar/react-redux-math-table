import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux";



function App(props) {

  const [inputnum, setInputnum] = useState()
  console.log(props)

  
  return (
    
    <div className="container">
      <div className="row">
        <h1> GENERATE MATH TABLE </h1>
        <div className="title-section">
          <input type="number"  min="1" max="1000" size="4" onChange={(e) => setInputnum(e.target.value)}/>
          <button onClick={ () =>  props.createTable(inputnum) }> Generate Math Table</button>
        </div>
      </div>
      <div className="row">
          {props.value === 1 ? '' : 
            <div className="result-section">
              <h2> Generated Map for { props.value[0]} </h2>
              <ul>
                  {
                  props.value.map((x, i)=>(
                    <li key={ i }> {x} </li>
                  ))
                }
                <button onClick={ () =>  props.resetTable() }> Reset Math Table</button>
              </ul>
            </div>
          }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      value : state
  }
}

const mapDispatchToProps = (dispatch) => {
  
      return {
          createTable : (value) => {
            value = parseInt(value);
            if(value && value !== 0){
              dispatch({
                type : 'CREATE_TABLE',
                value
              })
            } else {
              alert( "Please enter minimum value 1")
            }
          },

          resetTable : () => {
            dispatch({
              type : 'RESET'
            })
          }
      }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
