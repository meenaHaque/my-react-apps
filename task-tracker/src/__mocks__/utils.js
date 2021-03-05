import utils from '../utils'

utils.fetchTasks = jest.fn(() => {

  return [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "text": "Go for a walk!",
      "day": "Feb 12 at 11:00am",
      "reminder": false,
      "id": 3
    }
  ];
});

export default utils