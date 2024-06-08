import React from 'react'

export default function Login(props) {
  return (
    <>
      <form >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email: </label><br/>
                <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password: </label><br/>
                <input type="password" className="htmlForm-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 htmlForm-check">
                <input type="checkbox" className="mx-1 htmlForm-check-input" id="exampleCheck1" />
                <label className="htmlForm-check-label" htmlFor="exampleCheck1">Show Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

