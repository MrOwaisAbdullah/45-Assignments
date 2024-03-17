"use strict";
//creating a function that take artist name, album title and an optional number of track as parameter and return an object named album. 
Object.defineProperty(exports, "__esModule", { value: true });
let make_album = (artist_name, album_title, num_tracks) => {
    let album = {
        Artist: artist_name,
        Album: album_title,
        Tracks: num_tracks
    };
    console.log(album);
};
make_album("Atif Aslam", "Jalpari", 3);
