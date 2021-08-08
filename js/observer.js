// Clase base de observer se agrego recomendaciones vistas en la clase

class ObserverMediaPlayer {
  constructor(button, event) {
    this.observers = [];
    this.button = button;
    this.button.addEventListener(event, () => {
      this.notifyObservers();
    });
  }

  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      observer();
    });
  }
}

export default ObserverMediaPlayer;
