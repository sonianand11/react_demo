var courseList = [
  {courseName: "AngularJS"},
  {courseName: "Java"},
  {courseName: "Javascript"}
]

var ReviewControl = React.createClass({
  getInitialState: function(){
    return {reviews: [], name: "", feedback: "", course: ""}
  },
  onChangeName: function(el){
    this.setState({name: el.target.value})
  },
  onChangeFeedback: function(el){
    this.setState({feedback: el.target.value})
  },
  onChangeCourse: function(el){
    this.setState({course: el.target.value})
  },
  submitReview: function(el){
    el.preventDefault();
    this.state.reviews.push({name: this.state.name, feedback: this.state.feedback, course: this.state.course});
    this.setState({name: "", feedback: ""})
  },
  render: function(){
    var options = this.props.list.map(function(course){
      return <option value={course.courseName}>{course.courseName}</option>
    });

    return(
      <div>
        <form onSubmit={this.submitReview}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" value={this.state.name} onChange={this.onChangeName} />
          <br/><br/>
          <label>Feedback</label>
          <input type="text" placeholder="Enter your Feedback" value={this.state.feedback} onChange={this.onChangeFeedback} />
          <br/><br/>
          <label>Course</label>
          <select onChange={this.onChangeCourse}>
            {options}
          </select>
          <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        <ReviewCollection reviews={this.state.reviews}/>
      </div>
    );
  }

})

var ReviewCollection = React.createClass({
  render: function(){
    var reviews = this.props.reviews.map(function(review){
      return <Review course={review.course} name={review.name} feedback={review.feedback} />
    })
    return(
      <div>
        {reviews}
      </div>
    );
  }
})


var Review = React.createClass({
  render: function(){
    return(
      <div>
        <label>Name : </label>{this.props.name}
        <br/>
        <label>Course : </label>{this.props.course}
        <br/>
        <label>feedback : </label>{this.props.feedback}
      </div>
    );
  }
})

var ReviewControl = <ReviewControl list={courseList}/>;

ReactDOM.render(ReviewControl, document.getElementById("divContainer"))