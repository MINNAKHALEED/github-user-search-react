
import'./FooterWrapper.css'

import BITMAP from '../../assets/Bitmap.png';

import PINIMG from '../../assets/003-pin.png';

 import BUILDIMG from '../../assets/001-office-building.png';

 import TWITTERIMG from '../../assets/004-twitter.png';

 import URLIMG from '../../assets/002-url.png';

 import { ThemeContext } from '../../App';
 import { useContext } from 'react'

const FooterWrapper = () => {

const change = useContext(ThemeContext);

  return (
    <div className={`footerwrapper ${change.theme + "footer"}`}>


<div className='leftfooter'>
<img id='bitmap' src={BITMAP} alt="" />
</div>

<div className='rightfooter'>


   <div id='topfooter'>

  <div id='contentdiv'>
      <h3 className={`p1 ${change.theme + "p1"}`}>the octocat</h3>
      <p className='label1'>@octocat</p> 
      
  </div>

  <p className={`p2 ${change.theme + "p2"}`}>joined 25 jan 2011</p>
  </div> 



  <p className={`label2 ${change.theme + "label2"}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

<div className='allcontent'>


<div className={`middlefooter ${change.theme + "content"}`}>
    <div className='repo'>
      <p className={`head ${change.theme + "head"}`}>repos</p>
      <p className={`number ${change.theme + "number"}`}>8</p>
    </div>
    <div className='followers'>
      <p className={`head ${change.theme + "head"}`}>followers</p>
      <p className={`number ${change.theme + "number"}`}>3938</p>
    </div>
    <div className='following'>
      <p className={`head ${change.theme + "head"}`}>followers</p>
      <p className={`number ${change.theme + "number"}`}>9</p>
    </div>
  </div> 



   <div id='bottomfooter'>
    <div id='leftitem'>
      <div id='map'>
        <img className={change.theme + "img"} src={PINIMG} alt="" />
        <p className={`text1 ${change.theme + "text1"} `}>san francisco</p>
      </div>
      <div id='path'>
        <img className={change.theme + "img"} src={BUILDIMG} alt=""/>
        <p className={`text1 ${change.theme + "text1"}`}>https://github.blog</p>
      </div>
    </div>
    <div id='rightitem'>
      <div id='blog'>
      <img src={TWITTERIMG} alt="" />
      <p id='text3'>not available</p>
      </div>

      <div id='github'>
      <img className={change.theme + "img"} src={URLIMG} alt="" />
      <p className={`text1 ${change.theme +"text1"}`}>@ github</p>
      </div>
      
    </div>
  </div> 






</div>










  



</div>



  



      





    </div>
  );
}

export default FooterWrapper;









