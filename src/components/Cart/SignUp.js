import React from "react";




export default function SignUp() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto  text-center " style={{marginTop:-40}}>
          <h1>Sign Up</h1>
        
          <form style={{width:'40%',marginLeft:'28%',marginTop:'5%'}}>
                <div >
                <label>
                  Email:
                  <input type="email" name="name" />
                </label>
                </div>
                <div style={{marginLeft:-25}}>
                <label>
                  Password:
                  <input type="password" name="password" />
                </label>
                </div>
                <div style={{marginLeft:-72}}>
                <label>
                  Confirm Password:
                  <input type="password" name="cpass" />
                </label>
                </div>
                <div style={{marginLeft:13}}>
                <label>
                  age:
                  <input type="number" name="age" />
                </label>
                </div>
                
                <input  type="submit" value="Submit" />
          </form>


        </div>
      </div>
    </div>
  );
}
