import React, {Component} from 'react';
import Header from "./header";
import Hello from "./hello";
import Footer from "./footer";
import '../assets/css/App.css';

class App extends Component{
  render() {
    return (
        <div className="App">
            <Header />
            <Hello />
            <Footer />
        </div>
    );
  }
}

export default App;
