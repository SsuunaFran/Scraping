import requests 
from bs4 import BeautifulSoup

req=requests.get('https://www.jobs.co.ug/')

scrape= BeautifulSoup(req.content,"html.parser")

res=scrape.title

print(res.get_text())
