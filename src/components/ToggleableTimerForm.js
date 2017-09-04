import React from 'react';
import { TimerForm } from './TimerForm';
import '../styles/ToggleableTimerForm.css';
import plus from '../images/plus.png';

export class ToggleableTimerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
  }

  handleFormOpen() {
    this.setState({ isOpen: true });
  }

  handleFormClose() {
    this.setState({ isOpen: false });
  }

  handleFormSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  }

  render() {
    return (
      this.state.isOpen ?
        <TimerForm onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}/>
        :
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon'>
              <img alt='plus' src={plus}/>
            </i>
          </button>
        </div>
    );
  }
}