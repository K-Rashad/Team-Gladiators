import React from 'react'
import './App.css';
import { APIService } from './api.service'

let global_username=null





function apiCall1(e){


     e.preventDefault();
     global_username=e.target.uname.value
     let data={username:e.target.uname.value,pin:e.target.pin.value}
     APIService.loginUser(data).then((response) => {
      if (response.status === "SUCCESS") {
        // document.getElementById("etBalance").value = `Rs. ${response.user.balance}`;
        
        
        document.getElementById("sectionLogin").style.display = "none"
        document.getElementById("sectionWithdraw").style.display = "block"
    
  
  
      } else {
        document.getElementById("sectionLogin").style.display = "none"
        document.getElementById("cs1").style.display = "block"
  
      }  
    })



}



function apiCall2(e) {
  

  e.preventDefault();
  
  console.log(e.target.amount.value);
  let data = { username: global_username, amount: e.target.amount.value }
  APIService.makeWithdraw(data).then((response) => {
    if (response.status === "SUCCESS") {
      document.getElementById("etBalance").value = `Rs. ${response.user.balance}`;
      document.getElementById("sectionWithdraw").style.display = "none"
      document.getElementById("sectionBalance").style.display = "block"


    } else {
      document.getElementById("sectionWithdraw").style.display = "none"
      document.getElementById("cs2").style.display = "block"

    }  
  })



}
function App() {

  // useEffect(() => {
  //   APIService.makeWithdraw().then((response)=>{
  //     console.log(response);
  //   })

  // }, [])

  return (

    <>
     <div className="container" id="sectionLogin">
        <h2>Treasury Bank ATM</h2>
        <form onSubmit={apiCall1}>
          <label for="uname">Username</label>

          <input type="text" id="etUsername" name="uname" placeholder="Username" autoComplete="off" />

          <br /><br />
          <label for="pin">PIN</label>
          <input type="password" id="etPin" name="pin" placeholder="Enter PIN" autoComplete="off" />
          <br /><br />
          <button id="btnLogin" type="submit" >LOGIN</button>
        </form>

        <div className="bottom_container">
          <h5>Contact us</h5>
        </div>
      </div>

      <div className="container" id="sectionWithdraw">
        <h2>Treasury Bank ATM</h2>
        <h3>Welcome </h3>
        <form onSubmit={apiCall2}>
          {/* /* <label for="uname">Username</label>

          <input type="text" id="etUsername" name="uname" placeholder="Username"  /> */ }

          
          <label for="amount">Withdrawal amount</label>
          <input type="number" id="etAmount" name="amount" placeholder="Withdrawal amount" autoComplete="off" />
          <br /><br />
          <button id="btnWithdraw" type="submit" >WITHDRAW</button>
        </form>

        <div className="bottom_container">
          <h5>Contact us</h5>
        </div>
      </div>



      <div className="container" id="sectionBalance"  >
        <h2>Treasury Bank ATM</h2><br />
        <h3>Withdrawal successful</h3>
        <br />
        <label for="balance" className="label">Savings balance</label>
        <input type="text" id="etBalance" name="balance" disabled /><br />
        <br />
        <br />
        <br />

        <h3>Thank you for banking with us</h3>
        <div className="bottom_container">
          <h5>Contact us</h5>
        </div>
      </div>



      <div className="container" id="cs1"  >
        <h2>Treasury Bank ATM</h2>

        <h3>Invalid credentials</h3>


        <div className="bottom_container">
          <h5>Contact us</h5>
        </div>
      </div>
      <div className="container" id="cs2"  >
        <h2>Treasury Bank ATM</h2>

        <h3>Insufficient balance</h3>


        <div className="bottom_container">
          <h5>Contact us</h5>
        </div>
      </div>

    </>







  )
}

export default App;
