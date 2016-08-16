const events = [
  {
    id: 1,
    text: 'party',
    date: new Date()
  },
  {
    id: 2,
    text: 'birthday',
    date: new Date()
  }
];

export function fetchEvents() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(events), 2000)
  }).then(response => {
    return response;
  });
}
