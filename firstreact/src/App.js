import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import img1 from './images/recommended1.webp';
import img2 from './images/small1.png';
import apple from './images/endpic.png';
import contact from './images/R.png';
import b1 from './images/banner.png';
import deals from './images/mega.png';
import deal1 from './images/mega1.png';
import noon from './images/icon.jpg';
function App() {
  return (
    <div class = "main">
    <div>
     {/* navbar */}
     <div class = "box">
     <Grid container> 
     <Grid item lg = {1}>
       <ul class = "footer">
      <li> <img width="50px" src={noon}></img></li>
      </ul>
      </Grid>
      <Grid item lg = {2}>
       <ul class = "footer">
      <h4>noon</h4>
      </ul>
      </Grid>
      <Grid item lg = {2}>
        <ul class = "footer">
      <li>Deliver To Dubai</li>
      </ul>
      </Grid>
      <Grid item lg = {3}>
      <ul class = "footer">
      <li> <input type = "text" placeholder = "What are you looking for?"></input></li>
      </ul>
      </Grid>
      <Grid item lg = {2}>
      <ul class = "footer">
      <li>Sign in</li>
      </ul>
      </Grid>
      <Grid item lg = {2}>
      <ul class = "footer">
      <li> cart</li>
      </ul>
      </Grid>
      </Grid>
      </div>    
     {/* navbar */}
       {/* list */}
  <div>
    <Grid container>
<Grid item lg = {2}>
<ul class = "footer">
  <li>All Categories</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Electronics</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Men</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Women</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Home</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Beauty</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Baby</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Groceries</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Sports</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li>Sellers</li>
</ul>
</Grid>
<Grid item lg = {1}>
<ul class = "footer">
  <li> noon</li>
</ul>
</Grid>
    </Grid>
  </div>
   {/* list */}
   {/* banner */}
   <Grid container>
       <Grid item lg = {12}>
         <img src = {b1}></img>
       </Grid>
      </Grid>
   {/* banner */}
     <br></br>
     <br></br>
     <br></br>
     <br></br>
   {/* four yellow box */}
   <div class = "box">
   <Grid container >
     <Grid item lg = {2}>
         <h2>Set the Table right</h2> 
         <p>Dinnerware and serveware from 15 AED</p>
         </Grid>
         <Grid item lg = {2}>
         <img src = {img2}></img>
         </Grid>
         <Grid item lg = {2}>
         <h2>Set the Table right</h2> 
         <p>Dinnerware and serveware from 15 AED</p>
         </Grid>
         <Grid item lg = {2}>
         <img src = {img2}></img>
         </Grid>
         <Grid item lg = {2}>
         <h2>Set the Table right</h2> 
         <p>Dinnerware and serveware from 15 AED</p>
         </Grid>
         <Grid item lg = {2}>
         <img src = {img2}></img>
         </Grid>
   </Grid>
   </div>
  {/* four yellow box */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
{/* recommended for you cards */}
<div>
<Grid container>
  <Grid item lg = {12}>
<h4>Recommended for you</h4>
</Grid>
</Grid>
</div>
<Grid container spacing = {2}>
  <Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
<Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
<Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
<Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
</Grid>
{/* recommended for you cards */}
<br></br>
<br></br>
<br></br>
<br></br>
{/* megadeals */}
<div class = "mega">
<img src = {deals}></img>
<Grid container>
<Grid items lg = {4}>
  <img src = {deal1}></img>
 </Grid>
 <Grid items lg = {4}>
  <img src = {deal1}></img>
 </Grid>
 <Grid items lg = {4}>
  <img src = {deal1}></img>
 </Grid>
</Grid>
</div >
{/* megadeals */}
<br></br>
<br></br>
<br></br>
<br></br>
 {/* banner */}
 <Grid container>
       <Grid item lg = {12}>
         <img src = {b1}></img>
       </Grid>
      </Grid>
   {/* banner */}
   <br></br>
<br></br>
<br></br>
<br></br>
 {/* recommended for you cards */}
<div>
<Grid container>
  <Grid item lg = {12}>
<h4>Recommended for you</h4>
</Grid>
</Grid>
</div>
<Grid container spacing = {2}>
  <Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
<Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
<Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
<Grid item lg = {3}>
    <img src = {img1}></img>
<p>T500 BlueTooth Full Touch Call SmartWatch </p> 
<p>AED <b>37.0 </b></p>
<p>Arrives <b>Wed,May 18</b></p>
<h5><b>Express</b></h5>
</Grid>
</Grid>
{/* recommended for you cards */}
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
   {/* small cards */}  
     <div class = "small">
<div>
<Grid container >
       <Grid item lg = {9}>
       <h3>Electronics</h3> 
       </Grid>
       <Grid item lg = {3}>
      <Button variant="contained">VIEW ALL</Button>
       </Grid>
       </Grid>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      <div>
       <Grid  container spacing = {3}>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
    </Grid>
    </div>
    <div>
    <Grid container >
       <Grid item lg = {9}>
       <h3>Electronics</h3> 
       </Grid>
       <Grid item lg = {3}>
      <Button variant="contained">VIEW ALL</Button>
       </Grid>
       </Grid>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
     </div>
      <div>
        <div>
       <Grid  container spacing = {3}>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
    </Grid>
    </div>
    <Grid container >
       <Grid item lg = {9}>
       <h3>Electronics</h3> 
       </Grid>
       <Grid item lg = {3}>
      <Button variant="contained">VIEW ALL</Button>
       </Grid>
       </Grid>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      <div>
       <Grid  container spacing = {3}>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
    </Grid>
    </div>
    <Grid container >
       <Grid item lg = {9}>
       <h3>Electronics</h3> 
       </Grid>
       <Grid item lg = {3}>
      <Button variant="contained">VIEW ALL</Button>
       </Grid>
       </Grid>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      <div>
       <Grid  container spacing = {3}>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
         <Grid>
           <img item lg = {2} src = {img2}></img>
         </Grid>
    </Grid>
</div>
</div>
</div>
     {/* small cards */} 
     <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container>
       <Grid item lg = {12}>
         <img src = {b1}></img>
       </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
     {/* footer section */}
     <Grid container>
       <Grid item lg = {2}>
         <ul class = "footer">
     <li><h5>ELECTRONICS</h5></li>
      <li> Mobiles</li>
      <li>Tablets</li>
      <li> Laptops </li>
      <li> Camera,Photo and Video </li>
      <li> Televisions </li>
      <li> Headphones </li>
      <li> Video Games </li>
      </ul>
     </Grid>
     <Grid item lg = {2}>
     <ul class = "footer">
     <li><h5>ELECTRONICS</h5></li>
      <li> Mobiles</li>
      <li>Tablets</li>
      <li> Laptops </li>
      <li> Camera,Photo and Video </li>
      <li> Televisions </li>
      <li> Headphones </li>
      <li> Video Games </li>
      </ul>
     </Grid>
     <Grid item lg = {2}>
     <ul class = "footer">
     <li><h5>ELECTRONICS</h5></li>
      <li> Mobiles</li>
      <li>Tablets</li>
      <li> Laptops </li>
      <li> Camera,Photo and Video </li>
      <li> Televisions </li>
      <li> Headphones </li>
      <li> Video Games </li>
      </ul>
     </Grid>
     <Grid item lg = {2}>
     <ul class = "footer">
     <li><h5>ELECTRONICS</h5></li>
      <li> Mobiles</li>
      <li>Tablets</li>
      <li> Laptops </li>
      <li> Camera,Photo and Video </li>
      <li> Televisions </li>
      <li> Headphones </li>
      <li> Video Games </li>
      </ul>
     </Grid>
     <Grid item lg = {2}>
     <ul class = "footer">
     <li><h5>ELECTRONICS</h5></li>
      <li> Mobiles</li>
      <li>Tablets</li>
      <li> Laptops </li>
      <li> Camera,Photo and Video </li>
      <li> Televisions </li>
      <li> Headphones </li>
      <li> Video Games </li>
      </ul>
     </Grid>
     <Grid item lg = {2}>
     <ul class = "footer">
     <li><h5>ELECTRONICS</h5></li>
      <li> Mobiles</li>
      <li>Tablets</li>
      <li> Laptops </li>
      <li> Camera,Photo and Video </li>
      <li> Televisions </li>
      <li> Headphones </li>
      <li> Video Games </li>
      </ul>
     </Grid>
     </Grid>
     </div>
     <div class = "small">
       <Grid container>
         <Grid item lg = {7}>
         <h5>Shop on the Go</h5>
         <img width = "200px"src = {apple}></img>
         </Grid>
         <Grid item lg = {5}>
         <h5>Contact with us</h5>
         <img width = "200px"src = {contact}></img>
         </Grid>
         </Grid>
     </div>
      {/* footer section */}
    </div>
    </div>
    );
}

export default App;
 






























