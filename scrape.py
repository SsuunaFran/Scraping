import requests
import mysql.connector 
from bs4 import BeautifulSoup

req=requests.get('https://github.com/')

scrape= BeautifulSoup(req.content,"lxml")

res=scrape.title

print(res.get_text())

connection=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Ancis@2001",
    database="Scraping"
)

mycursor=connection.cursor()

