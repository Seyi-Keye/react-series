import React from 'react';
import mac from '../images/avatars/mac.jpeg';
import macbook from '../images/product/macbook.jpeg';
import '../styles/product.css';
import icon from '../images/avatars/up.png';

export class Product extends React.Component {
  constructor(){
    super();
    this.handleUpVote = this.handleUpVote.bind(this);
  }

   handleUpVote() {
     this.props.onVote(this.props.id);
   }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img alt='macbookpro' src={macbook} />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <div className='display'>
              <button onClick={this.handleUpVote}><img alt='icon' src={icon}/>
              </button>
              {this.props.votes}
            </div>
            <br/>
            <a>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <br/>
            <img
              alt='mac'
              className='ui avatar image'
              src={mac}
            />
          </div>
        </div>
      </div>
);
  }
}