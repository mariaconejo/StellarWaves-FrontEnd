function playlistFactory() {
  this.createList = function (type) {
    if (type === 'Favorite') {
      return FavoriteList();
    } if (type === 'Recent') {
      return RecentList();
    }
  };

  class ListSong {
    constructor(name, songs) {
      this.name = name;
      this.songs = songs;
    }
  }

  function FavoriteList() {
    return new ListSong('Favorites Songs', ['aurora', 'creep']);
  }

  function RecentList() {
    return new ListSong('Recent Songs', ['aurora', 'creep']);
  }
}

const factory = new playlistFactory();
const list = factory.createList('Favorite');
const list2 = factory.createList('Recent');

console.log(list);
console.log(list2);
