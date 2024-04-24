import json
from collections import Counter
from bokeh.plotting import figure, show
from bokeh.io import output_file
from bokeh.models import FactorRange


def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def top_n_songs(data, n=10):
    song_counts = Counter((entry["artistName"], entry["trackName"]) for entry in data)
    top_songs = song_counts.most_common(n)
    return top_songs


def create_bar_chart(top_songs):
    output_file("bar_chart.html")
    
    song_names, counts = zip(*top_songs)
    combined_names = [f"{artist} - {track}" for artist, track in song_names]
    
    p = figure(x_range=combined_names, width=1000, height=700, title="Top 10 Most Listened Songs",
               toolbar_location=None, tools="")
    
    p.vbar(x=combined_names, top=counts, width=0.5)

    p.xgrid.grid_line_color = None
    p.y_range.start = 0
    p.xaxis.axis_label = "Arist - Song Title"
    p.yaxis.axis_label = "Number of Plays"

    p.xaxis.major_label_orientation = "vertical"  # Rotate x-axis labels
    
    show(p)


if __name__ == "__main__":
    file_path = "mymusic.json"  # Replace with the path to your JSON file
    data = read_json(file_path)
    top_songs = top_n_songs(data)
    create_bar_chart(top_songs)
