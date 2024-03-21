import json
#Python code to parse spotify playlist from playlist json

def get_playlist(data):
    playlists = data['playlists']
    playlists_array = []
    for playlist in playlists:
        playlist_name = playlist['name']
        last_modified_date = playlist['lastModifiedDate']
        items = playlist['items']
        tracks = []
        for item in items:
            track_name = item['track']['trackName']
            artist_name = item['track']['artistName']
            album_name = item['track']['albumName']
            track_uri = item['track']['trackUri']
            added_date = item['addedDate']
                
            track_info = {
                'track_name': track_name,
                'artist_name': artist_name,
                'album_name': album_name,
                'track_uri': track_uri,
                'added_date': added_date
            }
                
            tracks.append(track_info)
            
            playlist_info = {
                'name': playlist_name,
                'last_modified_date': last_modified_date,
                'tracks': tracks
            }    
            playlists_array.append(playlist_info)
        return playlists_array

def main():
    with open("Playlist1.json", "r", encoding="utf-8") as file:#sample file used is from Garrett's spotify data
        playlist_data = json.load(file)
    
    playlists = get_playlist(playlist_data)

    #temporary display loops to show that above function is working
    for playlist in playlists:#display loop to show its in array
        print(f"Playlist Name: {playlist['name']}")
        print(f"Last Modified Date: {playlist['last_modified_date']}")
        print("Tracks:")
        for track in playlist['tracks']:
            print(f"\tTrack Name: {track['track_name']}")
            print(f"\tArtist Name: {track['artist_name']}")
            print(f"\tAlbum Name: {track['album_name']}")
            print(f"\tTrack URI: {track['track_uri']}")
            print(f"\tAdded Date: {track['added_date']}")
            print()
        print()

if __name__ == "__main__":
    main()
