import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
     }
     this.getSimpsonsQuote = this.getSimpsonsQuote.bind(this)

  }
  getSimpsonsQuote(){
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
      .then(response => {this.setState({
        quotes: response.data
      });
    });
  }
  
  render() {
    return (
      <div className="App">
      {this.state.quotes.map(item => (
      <QuoteCard
        key={item.quote}
        quote={item.quote}
        image={item.image}
        character={item.character}
      />
    ))}    
     <button className='new-quote' onClick={this.getSimpsonsQuote}>New quote!</button>

    </div>
    );
  }
}

export default App;
