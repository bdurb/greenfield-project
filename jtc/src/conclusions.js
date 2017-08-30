import React, { Component } from 'react';
import './conclusions.css';

class conclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concs:[
      { conc: 'Go For It!'},
      { conc: 'Get Back in Bed'},
      { conc: 'You should probably stop'},
      { conc: 'No one should ever do that'},
      { conc: 'If at first you dont succeed, give up'},
      { conc: 'Nothing worth doing is worth doing well...  I think thats how that goes'},
      { conc: 'Invest your 401k in that idea'},
      { conc: 'Instead of that, you should become a programmer'},
      { conc: 'Sometimes its best not to think'},
      { conc: 'The devil is in the details'},
      { conc: 'A bird in the hand is worth two in the bush'},
      { conc: 'Instead of that, start a band'},
      { conc: 'Run to the hills, run for your life'},
      { conc: 'Your question does not compute'},
      { conc: 'Do or do not, there is no try'},
      { conc: 'Better ask a friend for a second opinion'},
      { conc: 'Go ahead, count your chickens before they hatch'},
      { conc: 'Best Idea Ive heard this minute'},
      { conc: 'You need to do some thinkin drinkin'},
      { conc: 'Do not give up, you know, unless you want to'},
    ],
    randomConc: 0
  };
}

getRandom = () => {
  const newRand = Math.floor(Math.random() * (this.state.concs.length - 0) +0);

  this.setState({
    randomConc: newRand
  });
}

render() {
  return (
    <div>
      <h1 className='fun'>Go ahead and Click to Conclusions</h1>
      <p className = 'conc'>{ this.state.concs[this.state.randomConc].conc }</p>
      <button onClick = { this.getRandom }>Click</button>
    </div>
  );
};
}

export default conclusion;