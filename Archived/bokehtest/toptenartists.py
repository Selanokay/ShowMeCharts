import json
from collections import Counter
from bokeh.plotting import figure, show
from bokeh.io import output_file
from bokeh.models import FactorRange


def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def top_n_artists(data, n=10):
    artist_counts = Counter(entry["artistName"] for entry in data)
    top_artists = artist_counts.most_common(n)
    return top_artists

def create_bar_chart(top_artists):
    output_file("artists_chart.html")
    
    artist_names, counts = zip(*top_artists)
    
    p = figure(x_range=artist_names, width=1000, height=700, title="Top 10 Most Listened Artists",
               toolbar_location=None, tools="")
    
    p.vbar(x=artist_names, top=counts, width=0.5)
    
    p.xgrid.grid_line_color = None
    p.y_range.start = 0
    p.xaxis.axis_label = "Artist"
    p.yaxis.axis_label = "Number of Plays"

    p.xaxis.major_label_orientation = "vertical"  # Rotate x-axis labels
    
    show(p)

if __name__ == "__main__":
    file_path = "mymusic.json"  # Replace with the path to your JSON file
    data = read_json(file_path)
    top_artists = top_n_artists(data)
    create_bar_chart(top_artists)
