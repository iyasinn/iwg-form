import dataclasses
from flask import Flask, request, jsonify
from form_api.DATA import DRIVER_MAP
from flask_cors import CORS
import json

app = Flask(__name__)
URL = "https://iwg-form-frontend.vercel.app"
# URL = "http://localhost:5173"
CORS(app, resources={r"/*": {"origins": URL}})

print(__name__)


@app.route("/")
def index():
    return "<p>REST API for IWG form</p>"


@app.route("/submit_form", methods=["POST"])
def upload_form():
    forms = request.json.get("forms", None)
    if forms is None or len(forms) == 0:
        return {"error": "No forms data found"}, 400

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

    print(json.dumps(response, indent=2))
    # print(response)

    return response, response_code


@app.route("/get_fields", methods=["POST"])
def get_fields():
    """Returns keys for forms. If form doesn't exist, causes errors."""
    """If no forms provided, returns fields for all forms."""

    forms = request.json.get("forms", DRIVER_MAP.keys())

    current_keys = set()

    for form in forms:
        if form not in DRIVER_MAP:
            return jsonify({"error": f"Form '{form}' does not exist"}), 400

        new_keys = set(DRIVER_MAP[form].get_keys())
        current_keys = current_keys.union(new_keys)

    # Prepare successful response
    response = {"data": {"keys": list(current_keys)}}

    return jsonify(response), 200


@app.route("/get_forms", methods=["GET"])
def get_forms():
    response = {"forms": list(DRIVER_MAP.keys())}
    return jsonify(response), 200
