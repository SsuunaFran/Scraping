import requests 
from bs4 import BeautifulSoup

req=requests.get('https://www.geeksforgeeks.org/')

scrape= BeautifulSoup(req.content,"html.parser")

res=scrape.a

print(res.get_text())


