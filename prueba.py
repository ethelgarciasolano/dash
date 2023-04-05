
from dash import Dash, dcc, html, Input, Output
import plotly.express as px
import geojson
import json 
import pandas as pd
from geojson_rewind import rewind

app = Dash(__name__)


app.layout = html.Div([
    html.H4('Polotical candidate voting pool analysis'),
    html.P("Select a candidate:"),
    dcc.RadioItems(
        id='candidate', 
        options=["BENEFICIARIOS"],
        value="BENEFICIARIOS",
        inline=True
    ),
    dcc.Graph(id="graph"),
])


@app.callback(
    Output("graph", "figure"), 
    Input("candidate", "value"))

def display_choropleth(candidate):

    #df = px.data.election() # replace with your own data source
    df=pd.read_csv('static/geojson/SABANAGRANDE.csv', sep=';')
    print(df)
    with open('static/geojson/SABANAGRANDE.json', 'r', encoding='utf-8') as f:
        my_data = json.load(f)

    my_data= rewind(my_data,rfc7946=False)
   
    #with open('static/geojson/colombia-municipios0.geojson', "w", encoding="utf-8") as f:
     #   geojson_str = geojson.loads(f)
    '''
    with open('static/geojson/colombia-municipios0.json') as user_file:
        file_contents = user_file.read()
        
    print(file_contents)
    parsed_json = json.loads(file_contents)
    data = parsed_json
    '''
    print(my_data)
    #dump = geojson.dumps('static/geojson/colombia-municipios0.geojson', sort_keys=True)
    geojson1=my_data
    #geojson = px.data.election_geojson()
    
    
    fig = px.choropleth(
           df, geojson=geojson1, color="TIPO",
        locations="NOMBRE_MUNICIPIO", featureidkey="properties.nombre_municipio",
        projection="mercator", hover_data=['BENEFICIARIOS'], color_discrete_map={'No priorizado':'#009de0',
                                        'MANATI':'grey',
                                        'PONEDERA':'#ffc107','CANDELARIA':'#28a745','LURUACO':'#dc3545','SABANAGRANDE':'#CFD8DC',
                                        'SANTO TOMAS':'#2a2368'})

        #df, geojson=geojson1, color=candidate,
        #locations="NOMBRE_MUNICIPIO", featureidkey="properties.nombre_municipio",colorscale = 'Blues',
        #projection="mercator",range_color=[0, 10])
    fig.update_geos(fitbounds="locations", visible=False)
    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})

    fig.update_layout(legend=dict(
        orientation="h",
        yanchor="bottom",
        y=-0.11,
        xanchor="left",
        x=0,
    ),
    paper_bgcolor='rgba(0,0,0,0)',
    plot_bgcolor='rgba(0,0,0,0)'
   
    
    )
    fig.update_layout(geo=dict(bgcolor= 'rgba(0,0,0,0)'))
    fig.write_html("file.html")
    f.close()
    return fig
    
if __name__ == '__main__':
    app.run()