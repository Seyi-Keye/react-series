import React from 'react'
import trash from '../images/trash.png';
import edit from '../images/edit.jpeg';
import '../styles/Timer.css';
import { renderElapsedString } from '../helpers/helpers';

export class Timer extends React.Component {
  render() {
      const elapsedString = renderElapsedString(this.props.elapsed);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon'>
                <img alt='edit' src={edit}/>
              </i>
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon'>
                <img alt='trash' src={trash}/>
              </i>
            </span>
          </div>
        </div>
          </div>
        <div className='ui bottom attached blue basic button'>
          Start
        </div>
      </div>
    );
  }
}