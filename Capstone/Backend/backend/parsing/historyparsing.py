import json
#Python code to parse spotify playlist from playlist json

def get_listening_history(data):
    track_info = []
    for item in data:
        artist_name = item['artistName']
        song_name = item['trackName']
        time = item['endTime']
        amount_played = item['msPlayed']
        track_info.append((song_name, artist_name, time, amount_played))
    return track_info

def main():
    with open("StreamingHistory_music_0.json", "r", encoding="utf-8") as file:#sample file used is from Garrett's spotify data
        listen_data = json.load(file)
    

    history = get_listening_history(listen_data)

    #temp output to show that function works
    print("Track Name\tArtist\tDate\tPlaytime")
    print("-----------------------------------")#printing for now but will need connection to database
    for song, artist, time, playtime in history:
        print(f"{song}\t{artist}\t{time}\t{playtime}")

if __name__ == "__main__":
    main()
