int inputPin = 2;       // choose the input pin (for PIR sensor)
int ledPin = 13;        // choose the pin for the LED
int val = 0;            // variable for reading the pin status
unsigned long previousMillis = 0;  // will store last time motion was checked
const long interval = 50;        // interval to check motion (1 second)

void setup() {
  pinMode(inputPin, INPUT);  // declare sensor as input
  pinMode(ledPin, OUTPUT);   // declare LED as output
  Serial.begin(9600);        // initialize serial communication
}

void loop() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    val = digitalRead(inputPin);  // read input value from PIR sensor

    if (val == HIGH) {            // check if motion is detected
      digitalWrite(ledPin, HIGH); // turn LED ON
      Serial.println("Motion detected!"); 
    } else {
      digitalWrite(ledPin, LOW);  // turn LED OFF
      Serial.println("No motion detected.");
    }
  }
}
