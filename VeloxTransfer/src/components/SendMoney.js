import React, { Component } from 'react';
import language from '../language.json';

class SendMoney extends Component{
  constructor(){
    super();
    this.state = {
      send_name : '',
      send_lastname : '',
      send_bank : '',
      send_agency : '',
      send_account : '',
      send_idNumber : '',
      send_areaCode : '',
      send_phoneNumber : '',
      send_email : '',
      recipient_name : '',
      recipient_lastName : '',
      recipient_areaCode : '',
      recipient_phoneNumber : '',
      recipient_address : '',
      recipient_complement : '',
      recipient_city : '',
      recipient_state : '',
      recipient_postalCode : '',
      recipient_email : '',
      recipient_idNumber : ''
    };

    this.bankTransfer = this.bankTransfer.bind(this);
    this.setSendName = this.setSendName.bind(this);
    this.setSendLastName = this.setSendLastName.bind(this);
    this.setSendBank = this.setSendBank.bind(this);
    this.setSendAgency = this.setSendAgency.bind(this);
    this.setSendAccount = this.setSendAccount.bind(this);
    this.setSendIdNumber = this.setSendIdNumber.bind(this);
    this.setSendAreaCode = this.setSendAreaCode.bind(this);
    this.setSendPhoneNumber = this.setSendPhoneNumber.bind(this);
    this.setSendEmail = this.setSendEmail.bind(this);
    this.setRecipientName = this.setRecipientName.bind(this);
    this.setRecipientLastName = this.setRecipientLastName.bind(this);
    this.setRecipientAreaCode = this.setRecipientAreaCode.bind(this);
    this.setRecipientPhoneNumber = this.setRecipientPhoneNumber.bind(this);
    this.setRecipientAddress = this.setRecipientAddress.bind(this);
    this.setRecipientComplement = this.setRecipientComplement.bind(this);
    this.setRecipientCity = this.setRecipientCity.bind(this);
    this.setRecipientState = this.setRecipientState.bind(this);
    this.setRecipientPostaCode = this.setRecipientPostaCode.bind(this);
    this.setRecipientEmail = this.setRecipientEmail.bind(this);
    this.setRecipientIdNumber = this.setRecipientIdNumber.bind(this);
  }

  bankTransfer(event){
    event.preventDefault();
    console.log(this.state);
  }

  setSendName(event){
    this.setState({send_name:event.target.value});
  }

  setSendLastName(event){
    this.setState({send_lastname:event.target.value});
  }

  setSendBank(event){
    this.setState({send_bank:event.target.value});
  }

  setSendAgency(event){
    this.setState({send_agency:event.target.value});
  }

  setSendAccount(event){
    this.setState({send_account:event.target.value});
  }

  setSendIdNumber(event){
    this.setState({send_idNumber:event.target.value});
  }

  setSendAreaCode(event){
    this.setState({send_areaCode:event.target.value});
  }

  setSendPhoneNumber(event){
    this.setState({send_phoneNumber:event.target.value});
  }

  setSendEmail(event){
    this.setState({send_email:event.target.value});
  }

  setRecipientName(event){
    this.setState({recipient_name:event.target.value});
  }

  setRecipientLastName(event){
    this.setState({recipient_lastName:event.target.value});
  }

  setRecipientAreaCode(event){
    this.setState({recipient_areaCode:event.target.value});
  }

  setRecipientPhoneNumber(event){
    this.setState({recipient_phoneNumber:event.target.value});
  }

  setRecipientAddress(event){
    this.setState({recipient_address:event.target.value});
  }

  setRecipientComplement(event){
    this.setState({recipient_complement:event.target.value});
  }

  setRecipientCity(event){
    this.setState({recipient_city:event.target.value});
  }

  setRecipientState(event){
    this.setState({recipient_state:event.target.value});
  }

  setRecipientPostaCode(event){
    this.setState({recipient_postalCode:event.target.value});
  }

  setRecipientEmail(event){
    this.setState({recipient_email:event.target.value});
  }

  setRecipientIdNumber(event){
    this.setState({recipient_idNumber:event.target.value});
  }

  render(){
    return(
      <div className="main">
          {/* .container */}
          <div className="container">
              {/* .row */}
              <div className="row">
                  {/* .col */}
                  <div className="col-md-12">
                      <div className="head-border">
                          <div></div>
                      </div>
                      <h1>HOW MUCH WOULD YOU LIKE TO TRANSFER?</h1>
                  </div>
                  {/* /.col */}

                  {/* .col */}
                  <div className="col-md-5">
                      {/* .well */}
                      <div className="well well--remittance">
                          {/* .form-group */}
                          <div className="form-group form-group--remittance">
                              <label htmlFor="">You send:</label>

                              <div className="input-group">
                                    <input type="text" className="form-control form-control--noBorder" id="" placeholder="0.00" value="1.000"/>
                                    <div className="input-group-addon">
                                        <select id="" name="">
                                            <option value="">USD</option>
                                            <option value="">BRL</option>
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
                                        </select>
                                    </div>
                              </div>
                          </div>
                          {/* /.form-group */}

                          <p><em>VeloxTransfer</em> charges a fee of <strong>$10.00</strong> and you get a estimated exchange rate of <strong>$1 > R$3.37</strong></p>

                          <button className="btn btn-success btn-block">TRANSFER NOW</button>
                      </div>
                      {/* /.well */}

                      <p className="lead">
                          You ll save <strong>$28.87</strong> vs your bank.
                          <br />
                          Estimated arrival by <strong>Tuesday, August 25</strong>
                      </p>

                  </div>
                  {/* /.col */}

                  {/* .col */}
                  <div className="col-md-7">
                      <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" className="active">
                              <a href="#bank-transfer" aria-controls="bank-transfer" role="tab" data-toggle="tab">
                                  Bank transfer
                              </a>
                          </li>
                          <li role="presentation">
                              <a href="#credit-card" aria-controls="credit-card" role="tab" data-toggle="tab">
                                  Credit card
                              </a>
                          </li>
                          <li role="presentation">
                              <a href="#deposit" aria-controls="deposit" role="tab" data-toggle="tab">
                                  Deposit
                              </a>
                          </li>
                      </ul>

                      {/* Tab panes */}
                      <div className="tab-content">
                          <div role="tabpanel" className="tab-pane active" id="bank-transfer">
                              <form id="form_bankTransfer" name="form_bankTransfer" method="post" onSubmit={this.bankTransfer}>
                                  <legend>Your details</legend>

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.name}:</label>
                                              <input className="form-control" name="send_name" id="send_name" type="text" placeholder="" value={this.state.send_name} onChange={this.setSendName}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.lastName}:</label>
                                              <input className="form-control" name="send_lastname" id="send_lastname" type="text" placeholder="" value={this.state.send_lastname} onChange={this.setSendLastName}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.bank}:</label>
                                              <input className="form-control" name="send_bank" id="send_bank" type="text" placeholder="" value={this.state.send_bank} onChange={this.setSendBank}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.agency}:</label>
                                              <input className="form-control" name="send_agency" id="send_agency" type="text" placeholder="" value={this.state.send_agency} onChange={this.setSendAgency}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.account}:</label>
                                              <input className="form-control" name="send_account" id="send_account" type="text" placeholder="" value={this.state.send_account} onChange={this.setSendAccount}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.idNumber}:</label>
                                              <input className="form-control" name="send_idNumber" id="send_idNumber" type="text" placeholder="" value={this.state.send_idNumber} onChange={this.setSendIdNumber}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-2">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.areaCode}:</label>
                                              <input className="form-control" name="send_areaCode" id="send_areaCode" type="text" placeholder="" value={this.state.send_areaCode} onChange={this.setSendAreaCode}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-4">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.phoneNumber}:</label>
                                              <input className="form-control" name="send_phoneNumber" id="send_phoneNumber" type="text" placeholder="" value={this.state.send_phoneNumber} onChange={this.setSendPhoneNumber}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.email}:</label>
                                              <input className="form-control" name="send_email" id="send_email" type="text" placeholder="" value={this.state.send_email} onChange={this.setSendEmail}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  <br />

                                  <legend>Recipient details or <span className="text-success">Recipient specify the details</span></legend>

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.name}:</label>
                                              <input className="form-control" name="recipient_name" id="recipient_name" type="text" placeholder="" value={this.state.recipient_name} onChange={this.setRecipientName}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.lastName}:</label>
                                              <input className="form-control" name="recipient_lastName" id="recipient_lastName" type="text" placeholder="" value={this.state.recipient_lastName} onChange={this.setRecipientLastName}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-2">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.areaCode}:</label>
                                              <input className="form-control" name="recipient_areaCode" id="recipient_areaCode" type="text" placeholder="" value={this.state.recipient_areaCode} onChange={this.setRecipientAreaCode}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-4">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.phoneNumber}:</label>
                                              <input className="form-control" name="recipient_phoneNumber" id="recipient_phoneNumber" type="text" placeholder="" value={this.state.recipient_phoneNumber} onChange={this.setRecipientPhoneNumber}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.address}:</label>
                                              <input className="form-control" name="recipient_address" id="recipient_address" type="text" placeholder="" value={this.state.recipient_address} onChange={this.setRecipientAddress}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.complement}:</label>
                                              <input className="form-control" name="recipient_complement" id="recipient_complement" type="text" placeholder="" value={this.state.recipient_complement} onChange={this.setRecipientComplement}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.city}:</label>
                                              <input className="form-control" name="recipient_city" id="recipient_city" type="text" placeholder="" value={this.state.recipient_city} onChange={this.setRecipientCity}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.state}:</label>
                                              <input className="form-control" name="recipient_state" id="recipient_state" type="text" placeholder="" value={this.state.recipient_state} onChange={this.setRecipientState}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.postalCode}:</label>
                                              <input className="form-control" name="recipient_postalCode" id="recipient_postalCode" type="text" placeholder="" value={this.state.recipient_postalCode} onChange={this.setRecipientPostaCode}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.email}:</label>
                                              <input className="form-control" name="recipient_email" id="recipient_email" type="text" placeholder="" value={this.state.recipient_email} onChange={this.setRecipientEmail}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">{language.br.fields.idNumber}:</label>
                                              <input className="form-control" name="recipient_idNumber" id="recipient_idNumber" type="text" placeholder="" value={this.state.recipient_idNumber} onChange={this.setRecipientIdNumber}/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  <button className="btn btn-success btn-block">COMPLETE TRANSFER</button>

                                  <br />

                                  <button className="btn btn-default btn-block">Cancel</button>
                              </form>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="credit-card">
                              <form action="">
                                  <legend>
                                      Your details
                                      <img src="assets/img/cards.png" alt=""/>
                                  </legend>

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Card number:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Name as printed:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Expired date:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-xs-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">CVC/CVV:</label>
                                              {/* .row */}
                                              <div className="row">
                                                  {/* .col */}
                                                  <div className="col-xs-8">
                                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                                  </div>
                                                  {/* /.col */}

                                                  {/* .col */}
                                                  <div className="col-xs-4">
                                                      <img src="assets/img/cvv.png" alt=""/>
                                                  </div>
                                                  {/* /.col */}
                                              </div>
                                              {/* /.row */}
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  <br />

                                  <legend>Recipient details</legend>

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Full Name:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Email:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Account type:</label>
                                              {/* .form-group */}
                                              <div className="form-group">
                                                  <label className="radio-inline">
                                                    <input type="radio" id="inlineCheckbox1" value="option1"/> Checking
                                                  </label>

                                                  <label className="radio-inline">
                                                    <input type="radio" id="inlineCheckbox1" value="option1"/> Savings
                                                  </label>
                                              </div>
                                              {/* /.form-group */}
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Bank name:</label>
                                              <select id="" name="" className="form-control">
                                                  <option value="">Banco Itaú S. A.</option>
                                                  <option value="">Banco do Brasil.</option>
                                                  <option value="">Bradesco</option>
                                                  <option value="">Caixa Economica Federal</option>
                                                  <option value="">Santander</option>
                                              </select>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Branch Code:</label>

                                              {/* .row */}
                                              <div className="row">
                                                  {/* .col */}
                                                  <div className="col-md-4">
                                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                                  </div>
                                                  {/* /.col */}

                                                  {/* .col */}
                                                  <div className="col-md-8">
                                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                                  </div>
                                                  {/* /.col */}
                                              </div>
                                              {/* /.row */}
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Tax Registration Number (CPF):</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  <button className="btn btn-success btn-block">COMPLETE TRANSFER</button>

                                  <br />

                                  <button className="btn btn-default btn-block">Cancel</button>
                              </form>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="deposit">
                              <form action="">
                                  <legend>Your details</legend>

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Your address:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Zip Code:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">City:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">State/Province:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  <br />

                                  <legend>Recipient details or <span className="text-success">Recipient specify the details</span></legend>

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Full Name:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Email:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Account type:</label>
                                              {/* .form-group */}
                                              <div className="form-group">
                                                  <label className="radio-inline">
                                                    <input type="radio" id="inlineCheckbox1" value="option1"/> Checking
                                                  </label>

                                                  <label className="radio-inline">
                                                    <input type="radio" id="inlineCheckbox1" value="option1"/> Savings
                                                  </label>
                                              </div>
                                              {/* /.form-group */}
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Bank name:</label>
                                              <select id="" name="" className="form-control">
                                                  <option value="">Banco Itaú S. A.</option>
                                                  <option value="">Banco do Brasil.</option>
                                                  <option value="">Bradesco</option>
                                                  <option value="">Caixa Economica Federal</option>
                                                  <option value="">Santander</option>
                                              </select>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Branch Code:</label>

                                              {/* .row */}
                                              <div className="row">
                                                  {/* .col */}
                                                  <div className="col-md-4">
                                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                                  </div>
                                                  {/* /.col */}

                                                  {/* .col */}
                                                  <div className="col-md-8">
                                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                                  </div>
                                                  {/* /.col */}
                                              </div>
                                              {/* /.row */}
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Tax Registration Number (CPF):</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  <br />

                                  <legend>Our agencies close to you</legend>

                                  <div className="text-center">
                                      <img className="img-responsive" src="assets/img/map.png" alt=""/>
                                  </div>

                                  <br />

                                  <legend>Upload you deposit receipt</legend>

                                  <div className="form-group">
                                    <input type="hidden" role="uploadcare-uploader" name="UploadCare" data-crop="disabled" data-images-only="true" />
                                  </div>

                                  <p className="lead">This is your receipt:</p>
                                  <div className="text-center">
                                      <img className="img-responsive" src="assets/img/comprovante.png" alt=""/>
                                  </div>

                                  <br />

                                  <button className="btn btn-success btn-block">
                                      UPLOAD RECEIPT AND COMPLETE TRANSFER
                                  </button>

                                  <br />

                                  <button className="btn btn-default btn-block">Cancel</button>
                              </form>
                          </div>
                      </div>
                  </div>
                  {/* /.col */}
              </div>
              {/* /.row */}
          </div>
          {/* /.container */}
      </div>
    );
  }
}

export default SendMoney;
