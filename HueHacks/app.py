from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def mainPage(name=None):
    return render_template('mainPage.html', name=name)
