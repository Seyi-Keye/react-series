import React from 'react';
import { EditableTimer } from './EditableTimer';

export class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map(timer => {
      return (
        <EditableTimer
          key={timer.id}
          title={timer.title}
          project={timer.project}
          id={timer.id}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={this.props.onFormSubmit}
        />
      );
    });

    return (
      <div id='timers'>
        {timers}
      </div>
    );
  }
}