class ObserverMediaPlayer {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer();
    });
  }
}

class Observer extends ObserverMediaPlayer{
  constructor(button) {
    super()
    this.button = button;
  }
  action(){
    this.notifyObservers(this)
  }
}

export default Observer;
