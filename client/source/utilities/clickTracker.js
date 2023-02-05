import * as requests from './axiosRequests.js';

class ClickTracker {
  constructor() {
    this.sessionClicks = [];
    this.addClickTracker();
    this.recordUserClick.bind(this);
  }

  static sendInteractionData(data) {
    requests.post('/interactions', data)
      .then((response) => { console.info('POST /interactions', response.status, data); })
      .catch((error) => { console.error(error); });
  }

  addClickTracker() {
    document.addEventListener('click', this.recordUserClick.bind(this));
  }

  recordUserClick(event) {
    const interaction = {
      element: event.target.tagName, // TODO: assign trackable values to important elements
      widget: undefined,
      time: String(Date.now())
    };

    let currentNode = event.target;
    while (currentNode.id !== 'root') {
      if (currentNode.dataset.moduleName) {
        interaction.widget = currentNode.dataset.moduleName;
        break;
      }
      currentNode = currentNode.parentNode;
    }
    this.sessionClicks.push(interaction);
    ClickTracker.sendInteractionData(interaction);
  }

  removeClickTracker() {
    document.removeEventListener('click', this.recordUserClick);
  }
}


export default ClickTracker;
