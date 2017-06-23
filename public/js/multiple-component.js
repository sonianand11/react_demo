var divTag = <div class="course">Display Data via React</div>

var Courses = React.createClass({
  render: function(){
    return(
      <p>
        <Course courseName="React JS"/>
        <Course courseName="Angular JS"/>
      </p>
    );
  }

})

var Course = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.courseName}
      </div>
    );
  }
})

var courseElement = <Courses/>;

ReactDOM.render(courseElement, document.getElementById("divContainer"))