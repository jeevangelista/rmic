import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

APIURL = os.getenv("APIURL")
USERNAME = os.getenv("username")
PASSWORD = os.getenv("password")

with open("../schemas/landing-ui.json") as o:
	schema = json.loads(o.read())

res = requests.patch(APIURL + "/schemas/"+schema["id"], json=schema, auth=(USERNAME,PASSWORD))
print(res.text)