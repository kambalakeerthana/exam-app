import React,{useState} from 'react'
import'./css/exam.css'

 export default function First() {
  const[flag,setFlag] = useState(0);
  const DisplayResult = ()=>{
    console.log("hello");
  setFlag(1);
}
 
  return (
    <div className='design'>
        <input type="text" placeholder='enter the rollno'></input>
        <button onClick={DisplayResult}>submit</button>
        {flag == 0?"":
        <div>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">rollno</th>
      <th scope="col">name</th>
      <th scope="col">gender</th>
      <th scope="col">phno</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>raji</td>
      <td>f</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>nahi</td>
      <td>m</td>
      <td>987654231</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>sami</td>
      <td>f</td>
      <td>6252652652</td>
    </tr>
  </tbody>
</table>

        </div>
 }
      </div>
     
  )
 }
