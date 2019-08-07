import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import Home from './pages/Home';
import List from './pages/List';


class App extends Component {
  render() { 
    console.log(test);
    return(
   <div>
    <div class="dropdown show">
      <div>

        <a class="btn btn-secondary dropdown-toggle" href="#dropdown-menu"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Menu
        </a>
    
        <div  class = "dropdown-menu"  aria-labelledby="dropdownMenuLink"  >
            <a href = "#home">Dancing Birds</a>
            <a href = "#contact">Snowball Cockatoo</a>
            <a href = "#art">layson albatross</a>
            <a href="#art2">Birds of Paradise</a>
            <a href = "#contact2">Contact</a>
      </div>    
    </div>
    </div>


 <div class = "surrounding">
  <div class="heading">
<span class = "cover">
    <h1> About </h1>
  </span>
  </div>
</div> 
<a name = "home"><div class="aboutme abt-birds">

<h1>Dancing Birds</h1>
<p>Some of the dancing birds in the world are<a href="https://i.cbc.ca/1.5205637.1562698456!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/snowball-the-dancing-cockatoo.jpg">The snowball cockatoo</a>,
        <a href = "laysanbirds.jpg">laysan albatross</a>, and <a href = "birdsofparadise.jpg">birds of paradise</a></p>.
</div>
</a>
<div class = "surrounding2">
        <div class = "heading2">
          <span class = "cover2">
          
        </span>
        </div>
      </div>
<a name = "contact">
        <div class ="aboutme2  abt-birds2">
            <h1>Snowball Cockatoo</h1>
          <p>
            Snowball Cockatoo: Snowball depends on coordinated dance moves, which is made 
            randomly.

            </p>
          <img class ="snowbird" src = "sbird.gif" alt ="snbird"  />
          </div>
        </a>

          <div class="surrounding3">
              <div class="heading3">
                  <span class = "cover3">
                    
                    </span>
                    </div>
                    </div>
                    <a name = "art">
                  <div  class = "aboutme3 abt-birds3">             
                    <h1>Layson Albatross</h1>
              <p>They live in the forests.
                  </p>
                  <img class = "laysan" src = "ladance.gif" alt = "ladance"/>
                </div>
                </a>

              <div class="surrounding4">
                  <div class="heading4">
                      <span class = "cover4">
                          
                        </span>
                        </div>
                        </div>
                        <a name = "art2">
                      <div class = "aboutme4 abt-birds4">
                        <h1>Birds of Paradise</h1> 
                        <p>They are really jumpy.</p>  
                        <img class = "bop" src = "BirdofParadise.gif" alt = "bops"/>
                      </div>
                    </a>
                      <div class="surrounding5">
                        <div class="heading5">
                            <span class = "cover5">
                           
                              </span>
                              </div>
                              </div>
                              <a name = "contact2">
                            <div class = "aboutme5 abt-birds5">
                              <h1>Contact</h1> 
                              <p>Sign up to get more information about dancing birds.</p> 
                             
                              <form name = "contactform" action = "/action_page.php" id="action" method = "post">  
                              Name: <input type = "text"  name = "name1" placeholder="Pleade put your name here."/>
                             
                              email : <input class = "em" name = "name2" type = "email"  placeholder = "Please put your email here" required/> <br/>
                              Message: <br /><textarea rows = "10" name = "name3" cols = "90" name= "comment" placeholder = "Please put your message here" ></textarea>
                              <div class = "submitted">
                              <button  type = "button" class = "btn btn-primary btn-lg" onclick="signForm()" >Submit</button>
                                  </div>
                             
                              
                            </form>
                              </div>
                           
                          </a>
                          
                            <a href = "https://www.linkedin.com/in/abdullah-hasan123/"  class = "fa fa-linkedin"></a>
                            <a href = "https://github.com/ah1234567?tab=repositories" class = "fa fa-github"></a>

                            
                             </div>)
 
  }
}

export default App;