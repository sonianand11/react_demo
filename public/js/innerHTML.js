var Weather = React.createClass({

  render: function(){
    return(
      <div>
        Using Dangerously SetInnterHTML attribute
        <div dangerouslySetInnerHTML={getTemprature()}></div>
      </div>
    );
  }

})

function getTemprature(){
  return {__html: '20 &deg; C'}
}

ReactDOM.render(<Weather/>, document.getElementById("divContainer"))