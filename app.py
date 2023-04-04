

import math
import flask
from flask import (Flask, render_template,request)


app = Flask(__name__)
app.debug = True
app.title = 'MAPA INTERACTIVO'


@app.route('/', methods=('GET', 'POST'))
def index():
    try:
        return render_template( 'index.html')
    except Exception as ex:
      
        return render_template( 'index.html')
    

@app.route('/beneficiarios', methods=('GET', 'POST'))
def beneficiarios():
    try:
        return render_template( 'beneficiarios.html')
    except Exception as ex:
      
        return render_template( 'index.html')

@app.route('/actividades', methods=('GET', 'POST'))
def actividades():
    try:
        return render_template( 'actividades.html')
    except Exception as ex:
      
        return render_template( 'index.html')
    
@app.route('/mapa', methods=('GET', 'POST'))
def mapa():
    try:
        return render_template( 'mapa.html')
    except Exception as ex:
      
        return render_template( 'index.html')

@app.route('/frame', methods=('GET', 'POST'))
def frame():
    try:
        return render_template( 'file.html')
    except Exception as ex:
      
        return render_template( 'index.html')



if __name__ == '__main__':
    app.run()
    

''' 
   function onchangeDiurno(e) {
    if (e.currentTarget.value === 'Diurno') {
        <script src='https://devcenter.link/apropia/wp-content/resources/ConflictoDiurno.js'></script>;
    }
}

document.getElementById("tipomapaNocturno").addEventListener('change', onchangeDiurno);

function onchangeNocturno(e) {
    if (e.currentTarget.value === 'Nocturno') {
        <script src='https://devcenter.link/apropia/wp-content/resources/ConflictoNocturno.js'></script>
    }
}

document.getElementById("tipomapaDiurno").addEventListener('change', onchangeNocturno);
   '''