import moment from 'moment';
import uuid from 'uuid';


export const renderElapsedString= (elasped) => {
  return moment(elasped).format('hh:mm:ss').toString();
}

export const newTimer= (timer) => {
  return [{
    title: timer.title,
    project: timer.project,
    id: uuid.v4(),
    elapsed: 0,
    runningSince: Date.now(),
  }]
}