import React from 'react';

import axios from 'axios';

export default class Main extends React.Component
{

  constructor(props)
  {
    super(props);

    this.state = {
      data:null
    }

  }

  callAPI = () =>{

    console.log("Call api function is running");

    axios.get('https://books.zoho.com/api/v3/contacts?organization_id=669978070',{headers:{ 'Authorization': 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }})
    .then(result=>{
      console.log(result.data);

      this.setState({
        data: result.data
      });

    });
  }

  componentDidMount()
  {
    console.log("called");
    axios.get('https://books.zoho.com/api/v3/contacts?organization_id=669978070',{headers:{ 'Authorization': 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }})
    .then(result=>{
      console.log(result.data);

      this.setState({
        data: result.data
      });

    });
  }

  render()
  {

    let printer = "";

    if(this.state.data)
    {

      let something = this.state.data.contacts;

      printer = something.map((a)=>{
        return (
          <tr key={a.contact_id}>
          <td> {a.contact_name} </td>
          <td> {a.customer_name} </td>
          <td> {a.vendor_name} </td>
          <td> {a.contact_id} </td>
          <td> {a.status} </td>
          <td> {a.currency_code} </td>
          <td> {a.created_time} </td>
          <td> {a.email} </td>
          <td> {a.phone} </td>
          </tr>
        );
      })

    }

    return (
      <div className="middler">
      <br/><br/>
      <center> <button onClick={()=>this.callAPI()}> Make the call </button> </center>
      <br/>
      <div className="over">

        <table className="table_style">
        <thead>
        <tr>
        <th> contact name  </th>
        <th> customer name  </th>
        <th> Vendor name  </th>
        <th> contact id  </th>
        <th> Status  </th>
        <th> Currency Code  </th>
        <th> created time  </th>
        <th> email </th>
        <th> phone  </th>
        </tr>
        </thead>
        { printer }
        </table>

      </div>
      </div>
    );
  }
}
