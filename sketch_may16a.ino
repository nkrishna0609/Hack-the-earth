
#include <Servo.h>
const char signalOn = 'S';
const char signalOff = 'O';
Servo servo1;
int pos=0;
void setup() {
  pinMode(13, OUTPUT);
  servo1.attach(10);
  Serial.begin(115200);    
}

void loop() {
  
  
  while(Serial.available()>0)
  {
    digitalWrite(13, LOW);
    int datafromUser=Serial.read();
    //if(datafromUser == signalOff){
      //digitalWrite(13, LOW);
      //while(pos <= 90){
        //servo1.write(pos);
        //pos+=1;
      //}
      //Serial.println("OFF");
      //delay(500);
    //}
    if(datafromUser == signalOn){
      digitalWrite(13, HIGH);
      while(pos <= 90){
        servo1.write(pos);
        pos+=1;
      }
      
      delay(2000);
      while(pos>=0){
        servo1.write(pos); 
        pos-=1; 
          
      } 
      delay(500);
    }
  }
}
