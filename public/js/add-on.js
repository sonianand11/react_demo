
// Without Addon
var FormWithoutAddon = React.createClass({
  getInitialState: function(){
    return({text: ''});
  },
  render: function(){
    return(
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />{this.state.text}
      </div>
    )
  },
  handleChange: function(evt){
    this.setState({text: evt.target.value});
  }
})


// With React Addon LinkedStateMixin

var FormWithAddon = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return({text: ''});
  },
  render: function(){
    return(
      <div>
        <input type="text" valueLink={this.linkState("text")} />{this.state.text}
      </div>
    )
  },

})

ReactDOM.render(<FormWithAddon/>,document.getElementById("divContainer"))