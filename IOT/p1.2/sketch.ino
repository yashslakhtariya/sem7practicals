void setup() {
  // put your setup code here, to run once:
    pinMode(0, OUTPUT);
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
    
}

void loop() {

//yellow
    digitalWrite(0, HIGH);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(1000);

//red
    digitalWrite(0, HIGH);
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(500);

//yellow
    digitalWrite(0, HIGH);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(500);

//green
    digitalWrite(0, LOW);
    digitalWrite(1,HIGH);
    digitalWrite(2, HIGH);
    delay(500);
}