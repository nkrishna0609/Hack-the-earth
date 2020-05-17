import os
from flask import Flask
import serial
import time


app = Flask(__name__)

sig = serial.Serial('COM3',115200,timeout=2)
print(("COM3",115200))

# datafromUser = input()
# if datafromUser =='S':
#     sig.write(b'S')
#     print("yea")
#     time.sleep(200000)
# elif datafromUser == 'O':
#     sig.write(b'O')
#     print("no")
# print("done")

@app.route("/open", methods=['GET', 'POST'])
def opendoor():
    sig.write(b'O')
    print("yea")
#     time.sleep(200000)
    ##res = request.json

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(js, status=200, mimetype='text/html')
    ##resp.headers['Link'] = 'http://google.com'

    return resp

@app.route("/close", methods=['GET', 'POST'])
def closedoor():
    sig.write(b'S')
    print("yea")
#     time.sleep(200000)
    ##res = request.json

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(js, status=200, mimetype='text/html')
    ##resp.headers['Link'] = 'http://google.com'

    return resp



@app.route("/dummy", methods=['GET', 'POST'])
def dummy():

    ##res = request.json

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(js, status=200, mimetype='text/html')
    ##resp.headers['Link'] = 'http://google.com'

    return resp


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/name')
def hello_name(name):
    return "Hello {}!".format(name)

if __name__ == '__main__':
    app.run(debug=True, host = 'localhost', port = 8002)
    
