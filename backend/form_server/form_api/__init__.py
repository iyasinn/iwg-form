import dataclasses
from flask import Flask, request
from form_api.form_data import DRIVER_MAP, KEY_MAP

app = Flask(__name__)

print(__name__)


@app.route("/")
def hello_world():
    return "<p>REST API for IWG form</p>"


@app.route("/submit_form", methods=["POST"])
def upload_form(): 

    forms = request.json.get("forms", None)
    if forms is None: 
        return "Error, no forms propery found", 400

    data = request.json.get("data", {})

    for form in forms: 
        driver = DRIVER_MAP[form]
        response = driver.submit_to_form(data)
        if not response: 
            return "Driver submission failed.", 400

    return "Successful submission!", 200