#include "TinyGPS++.h" 
#include "SoftwareSerial.h" 

SoftwareSerial serial_connection(10,11); //TX pin 10, RX-pin 11) 
TinyGPSPlus gps; //This is the GPS object that will do all the grunt work with the NMEA data

void setup() 
{
  Serial.begin (9600);
  serial_connection.begin(9600);
  Serial.println("GPS Start");
}

void loop() 
{
  while (serial_connection.available())
  {
    gps.encode(serial_connection.read()); //This feeds serial NMES data into the library one char at a time
  }
  if(gps.location.isUpdated()) //This will pretty much be fired all the time anyway but will at least reduce it to only after a package of NMEA data comes in
  {
    Serial.println("Satellite Count:"); 
    Serial.println(gps.satellites.value()); 
    Serial.println("Latitude"); 
    Serial.println(gps.location.lat(),6); 
    Serial.println("Longitude"); 
    Serial.println(gps.location.lng(),6);
    Serial.println("Speed MPH");
    Serial.println(gps.speed.mph());
    Serial.println("Speed KMPH");
    Serial.println(gps.speed.kmph());
    Serial.println("Altitude Feet");
    Serial.println(gps.altitude.feet());
    Serial.println("Altitude Meters");
    Serial.println(gps.altitude.meters());
    Serial.println("");  
  }
  
}
