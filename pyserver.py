from flask import Flask

app = Flask(__name__)

@app.route('/run-python', methods=['POST'])
def run_python():
    # Execute the Python script here
    result = "Python script executed successfully"
    return result

if __name__ == '__main__':
    app.run()
