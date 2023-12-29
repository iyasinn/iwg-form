import dataclasses
from flask import Flask, request, jsonify
from form_api.form_data import DRIVER_MAP
import json

app = Flask(__name__)

print(__name__)


@app.route("/")
def index():
    return "<p>REST API for IWG form</p>"


@app.route("/submit_form", methods=["POST"])
def upload_form():
    forms = request.json.get("forms", None)
    if forms is None:
        return {"error": "No forms property found"}, 400

    data = request.json.get("data", {})

    response = {"results": {}}
    response_code = 200

    # Validate data
        # for form in forms:
        #     driver = DRIVER_MAP[form]
        #     if not driver.data_valid(data):
        #         response["results"][form] = {
        #             "status": "error",
        #             "message": "Invalid key data.",
        #             "missing keys": driver.get_missing_keys(),
        #         }
        #         response_code = 400
        # if response_code == 400:
        #     return response, response_code

    for form in forms:
        driver = DRIVER_MAP[form]
        driver_response = driver.submit_to_form(data)
        response["results"][form] = driver_response
        response_code = 400 if driver_response["status"] == "error" else response_code
    
    print(response)
    return response, response_code


@app.route("/get_fields", methods=["POST"])
def get_fields():
    forms = request.json.get("forms", None)

    if forms is None:
        return "Error, no forms propery found", 400

    current_keys = set()

    for form in forms:
        if form not in DRIVER_MAP[form].get_keys():
            return f"Error, form {form} does not exist", 400

        new_keys = set(DRIVER_MAP[form].get_keys())
        current_keys = current_keys.union(new_keys)

    return jsonify(list(current_keys)), 200
