import serial
import time
sig = serial.Serial('COM3',115200,timeout=2)
print(("COM3",115200))

datafromUser = input()
if datafromUser =='S':
    sig.write(b'S')
    print("yea")
    time.sleep(200000)
elif datafromUser == 'O':
    sig.write(b'O')
    print("no")
print("done")
