from pymongo import MongoClient

mongo_url = "mongodb+srv://dashboardadmin:Dashboard123@cluster0.pkp2vcu.mongodb.net/"

client = MongoClient(mongo_url)

database = client["blackcoffer_dashboard"]

insights_collection = database["insights"]