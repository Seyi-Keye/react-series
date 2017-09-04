import React from 'react';
import { TimerForm } from './TimerForm';
import { Timer } from './Timer';

export class EditableTimer extends React.Component{
  constructor() {
    super();
    this.state = {
      editFormOpen: false,
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormClose = this.onFormClose.bind(this);
  }

  onFormSubmit() {
    console.log('Form submitted')
  }

  onFormClose() {
    console.log('form closed or cancelled')
  }

  render() {
    return(
      this.state.editFormOpen ?
      <TimerForm
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        onFormSubmit={this.props.onFormSubmit}
        onFormClose={this.props.onFormClose}
      />
    :
      <Timer
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        runningSince={this.props.runningSince}
      />
    );
  }
}
