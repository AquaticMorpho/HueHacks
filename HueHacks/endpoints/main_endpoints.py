from flask import render_template, request, redirect, url_for
import json
def main_view():
    with open('names.json') as f:
        dat = json.load(f)
    names = dat['names']

    return render_template('mainPage_tmp.html', names=names)

def main_view_post():
    name_sent = request.form["name"]
    if name_sent == "":
        return redirect('/main')
    with open('names.json') as f:
        dat = json.load(f)
    current_names = dat["names"]
    current_names.append(name_sent)
    print(current_names)
    dat["names"] = current_names
    print(dat)
    with open('names.json', 'w') as f:
        json.dump(dat, f)
    return redirect('/main')