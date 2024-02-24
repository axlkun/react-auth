
const Register = () => {

    return (
      <form>
            <div>
              <h1 className='h3 mb-3 fw-normal'>Please register</h1>
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
    )
  }
  
  export default Register
  