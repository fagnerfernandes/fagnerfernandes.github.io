import React, { Component } from 'react';

class SideBar extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="well">
            {/* .form-group */}
            <div className="form-group form-group--remittance">
                <label htmlFor="">You send:</label>

                <div className="input-group">
                      <input type="text" className="form-control form-control--noBorder" id="" placeholder="0.00" value="1.000"/>
                      <div className="input-group-addon">
                          <select id="" name="">
                              <option value="">USD</option>
                              <option value="">BRL</option>
                              <option value="">VEF</option>
                              <option value="">ARS</option>
                              <option value="">BOB</option>
                              <option value="">COP</option>
                              <option value="">CNY</option>
                              <option value="">MXN</option>
                              <option value="">INR</option>
                              <option value="">PHP</option>
                          </select>
                      </div>
                </div>
            </div>
            {/* /.form-group */}

            {/* .form-group */}
            <div className="form-group form-group--remittance">
                <label htmlFor="">Receive:</label>

                <div className="input-group">
                      <input type="text" className="form-control form-control--noBorder" id="" placeholder="0.00" value="3.370"/>
                      <div className="input-group-addon">
                          <select id="" name="">
                              <option value="">BRL</option>
                              <option value="">USD</option>
                              <option value="">VEF</option>
                              <option value="">ARS</option>
                              <option value="">BOB</option>
                              <option value="">COP</option>
                              <option value="">CNY</option>
                              <option value="">MXN</option>
                              <option value="">INR</option>
                              <option value="">PHP</option>
                          </select>
                      </div>
                </div>
            </div>
            {/* /.form-group */}

            <button className="btn btn-success btn-block">TRANSFER NOW</button>
        </div>
        {/* /.well */}

        {/* .table */}
        <table className="table">
            <thead>
                <tr>
                    <th>Recent recipients</th>
                    <th className="text-right">
                        <a href="/my-recipients.html">Add new</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspa="2">No saved recipients yet</td>
                </tr>
                <tr>
                    <td>Al Gore</td>
                    <td className="text-right">
                        <a href="">View recipt</a>
                    </td>
                </tr>
                <tr>
                    <td>Al Gore</td>
                    <td className="text-right">
                        <a href="">View recipt</a>
                    </td>
                </tr>
            </tbody>
        </table>
        {/* /.table */}

        {/* .well */}
        <div className="well well--invite text-center">
            <h3>EARN $50 BY INVITING FRIENDS</h3>
            <p>Treat your friends with a fee transfer up to $3,000.<br /> For every three friends who use their transfer we give you $50 as thanks for you help.</p>

            <a href="" className="btn btn-success btn-block">INVITE FRIENDS</a>
        </div>
        {/* /.well */}
      </React.Fragment>
    );
  }
}

export default SideBar;
