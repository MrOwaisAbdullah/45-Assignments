//creating a function that take artist name, album title and an optional number of track as parameter and return an object named album. 

let make_album = (artist_name: string, album_title: string, num_tracks?: number) => {
    let album: object = {
        Artist: artist_name,
        Album: album_title,
        Tracks: num_tracks
    }
    console.log(album);

}

make_album("Atif Aslam", "Jalpari", 3);