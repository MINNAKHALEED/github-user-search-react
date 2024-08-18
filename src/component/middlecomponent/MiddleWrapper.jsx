

import'./MiddleWrapper.css'


import SEARCHIMG from '../../assets/Shape.png';

import { ThemeContext } from '../../App';

import {useContext, useState} from 'react'

const MiddleWrapper = () => {

const context = useContext(ThemeContext);

 const [formdata, setFormdata] = useState({
user : "",

});



function onhandlesubmit (event) {
event.preventDefault();
// console.log(formdata);

}



function onhandlechange (event){

  var value = event.target.value;
  // console.log(value);
  const key = event.target.name
  // console.log(key);

  setFormdata({...formdata, [key] : value})

  }


  





  return (
    <form className={`middlewrapper ${context.theme + "middle"}`} onSubmit={onhandlesubmit}>
    <div id='leftdiv'>
    <img id='searchimg' src={SEARCHIMG} alt=""  />




  <input type="text" placeholder='search github username....' className={`search ${context.theme + "search"}`} autoComplete='off' value={formdata.user} name='user' onChange={onhandlechange} />

      {/* <label className={`search ${context.theme + "search"}`}>search github username ....</label> */}
    </div>

    <button id='rightdiv'>search</button>
    {/* <div id='rightdiv'>
      <p id='searchp'>search</p>
    </div> */}
    </form>
  );
}

export default MiddleWrapper;



