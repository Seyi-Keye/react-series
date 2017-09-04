import React from 'react';
import { EditableTimerList } from './EditableTimerList';
import { newTimer } from '../helpers/helpers';
import { ToggleableTimerForm } from './ToggleableTimerForm';
import uuid from 'uuid';

export class TimerDashboard extends React.Component{
  constructor() {
    super();
    this.state = {
    timers: [
              {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now(),
              },
              {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null,
              },
            ],
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.createTimer = this.createTimer.bind(this);
  }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  createTimer(timer) {
    const t = newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  }

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList timers={this.state.timers}
          />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit}/>
        </div>
      </div>
    );
  }
}