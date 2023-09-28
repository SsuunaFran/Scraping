import requests
import mysql.connector 
from bs4 import BeautifulSoup
connection=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Ancis@2001",
    database="Scraping"
)
mycursor=connection.cursor()
req=requests.get('https://elitejobstoday.com/')

scrape= BeautifulSoup(req.content,"lxml")
articles= scrape.find_all("article")
for article in articles:
    anchors=article.find_all("a")
    jobtitle=anchors[2].get_text()
    jobcompany=article.find("span",class_="job-company").a.get_text()
    jobtype=article.find("span",class_="job-type").a.span.get_text()
    joblocation=anchors[5].get_text()
    jobdateposted=article.find("span",class_="job-date__posted").get_text().strip()
    jobdateclosing=article.find("span",class_="job-date__closing").get_text().strip().replace("- ","")
    jobdateago=article.find("span",class_="job-date-ago").get_text()
    sql="INSERT INTO scrapper values(%s,%s,%s,%s,%s,%s,%s)"
    Values=(jobtitle,jobcompany,jobdateposted,joblocation,jobdateclosing,jobdateago,jobtype)
    mycursor.execute(sql,Values)
    connection.commit() 

mycursor.close()
connection.close()