
import'./TopWrapper.css'

import MOON from '../../assets/moon.png';
import SUN from '../../assets/002-sun.png';
import { ThemeContext } from '../../App';

import {useContext} from 'react'



const TopWrapper = () => {

const theme = useContext(ThemeContext);  

function onHandleChange (event){
let newValue;
if (event.target.checked == false) {
  newValue = "light"

} else {
  newValue = "dark"
}

console.log(newValue);

theme.setTheme(newValue);
 }





  return (
    <div id="topwrapper">

      <hl className={`title ${theme.theme + "title"}`}>devfinder</hl>

      <div id='togglebutton'>
      <label className={`darklabel ${theme.theme + "mode"}`}>
      {
        theme.theme == "light" ? <label>dark</label> : <label>light</label>
      }
        
        </label>
      <input type="checkbox" onChange={onHandleChange} />



      {
        theme.theme == "light" ? <img className='img' src={MOON} alt="" /> :   <img className='img' src={SUN} alt="" />
      }

    
      </div>

    </div>
  );
}

export default TopWrapper;
