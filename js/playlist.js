function playlistFactory(){
    this.createList = function(type){
        if(type === "Favorite"){
            return FavoriteList();
        }else if (type === "Recent"){
            return RecentList();
        }
    }

        class ListSong {
            constructor(name, songs) {
                this.name = name;
                this.songs = songs;
            }
        }
        
        function FavoriteList(){
            return new ListSong ('Favorites Songs',['aurora','creep']);
        }
        
        function RecentList(){
            return new ListSong ('Recent Songs',['aurora','creep']);
        }

        

}

    let factory = new playlistFactory();
    let list = factory.createList("Favorite");
    let list2 = factory.createList("Recent")

    console.log(list)
    console.log(list2)





