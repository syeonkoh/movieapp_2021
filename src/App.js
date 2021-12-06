
import React from "react";


class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    },6000);
  }
  
  render(){
    console.log("render")
    const {isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready"}</div>;
  }
}
export default App;

