var divTag = <div class="course">Display Data via React</div>

var Courses = React.createClass({

  render: function(){
    return(
      <p>
        Course Name <input type="text" placeholder="Course name here"/>!
        The date is {this.props.date.toString()}
      </p>
    );
  }

})

// 1 way to assign property
// var courseElement = <Courses date={new Date()}/>;

// 2nd way to assign property
// var courseElement = <Courses/>;
// courseElement.props.date = new Date();

// 3rd wayt to assign property
var courseElement = <Courses/>;
var properties = {};
properties.date = new Date();
courseElement.props = properties;

ReactDOM.render(courseElement, document.getElementById("divContainer"))