var CustomerCollection = React.createClass({
  getInitialState: function(){
    return {customers: []}
  },
  componentDidMount: function(){
    var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    $.get(url,function(result){
      var data = result;
      var customerList = data.value;

      if(this.isMounted()){
        this.setState({customers: customerList});
      }
    }.bind(this));
  },
  render: function(){
    return(
      <div>
        <Customers customers={this.state.customers} />
      </div>
    )
  }
})


var Customers = React.createClass({
  render: function(){
    var customers = this.props.customers.map(function(customer){
      return <Customer CustomerID={customer.CustomerID} CompanyName={customer.CompanyName} ContactName={customer.ContactName} />
    })
    return(<div>{customers}</div>)
  }
})

var Customer = React.createClass({

  render: function(){
    return(
      <div>
        <span>Customer Id </span> {this.props.CustomerID}
        <br/>
        <span>Comoany Name </span> {this.props.CompanyName}
        <br/>
        <span>Contact Name </span> {this.props.ContactName}
        <br/><br/>
      </div>

    )
  }
})

ReactDOM.render(<CustomerCollection/>,document.getElementById("divContainer"))