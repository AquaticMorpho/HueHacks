from flask import Flask
from flask import render_template
from endpoints.hello_world import hello
from endpoints.main_endpoints import main_view, main_view_post
app = Flask(__name__)
app.add_url_rule('/hello_world', view_func=hello)
main_view_post.methods = ["POST"]
app.add_url_rule('/main', view_func=main_view)
app.add_url_rule('/add_name', view_func=main_view_post)


app.run()