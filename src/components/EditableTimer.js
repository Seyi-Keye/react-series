import React from 'react';
import { TimerForm } from './TimerForm';
import { Timer } from './Timer';

export class EditableTimer extends React.Component{
  constructor() {
    super();
    this.state = {
      editFormOpen: false,
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  handleEditClick() {
    this.openForm();
  }
  handleFormClose() {
    this.closeForm();
  }
  handleSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.closeForm();
  }
  closeForm() {
    this.setState({ editFormOpen: false });
  }
  openForm() {
    this.setState({ editFormOpen: true });
  }

  render() {
    return(
      this.state.editFormOpen ?
      <TimerForm
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        onFormSubmit={this.handleSubmit} onFormClose={this.handleFormClose}
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
