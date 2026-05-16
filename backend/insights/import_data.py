import json
from mongo_connection import insights_collection

with open("data/jsondata.json", "r", encoding="utf-8") as json_file:
     json_data = json.load(json_file)


if isinstance(json_data, list):
    insights_collection.insert_many(json_data)
    print("Data imported successfully")
else:
    print("JSON format is invalid")