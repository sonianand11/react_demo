var divTag = <div class="course">Display Data via React</div>

var Courses = React.createClass({
  getInitialState: function(){
    return {sold: "Not Sold"}
  },
  getDefaultProps: function(){
    return {date: new Date("2015-02-14"), launch: "April First week"}
  },
  render: function(){
    return(
      <p>
        Course Name <input type="text" placeholder="Course name here"/>!
        <br/>
        The date is {this.props.date.toString()}
        <br/>
        The Course state is {this.state.sold}
        <br/>
        The Course will launch in {this.props.launch}
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
// var properties = {};
// properties.date = new Date();
// courseElement.props = properties;

ReactDOM.render(courseElement, document.getElementById("divContainer"))