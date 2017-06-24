var imgUrl = "http://www.artechspot.com/img/logo1-default.png";

var divStyle = {
  color: "#07649",
  height: 60,
  background: "url(" + imgUrl +") no-repeat",
  backgroundImage: "url(" + imgUrl +")"
}


var Course = React.createClass({
  render: function(){
    return(
      <div style={divStyle}>
        This is with inline style
      </div>
    );
  }
})

var courseElement = <Course/>;

ReactDOM.render(courseElement, document.getElementById("divContainer"))