var val1 = 0;
var val2 = 0;
var val3 = 0;
var val4 = 0;

var out;

function bang()
{
	outlet(0,"http://api.thingspeak.com/update?key=7IZXDF84MXCGB0G2&field1=" + val1 + "&field2=" + val2 + "&field3=" + val3 + "&field4=" + val4);
}	


function msg_float(v1, v2, v3, v4)
{
//	post("received float " + v + " " + v2 + " " + v3 + " " + v4 + "\n");
	val1 = v1;
	val2 = v2;
	val3 = v3;
	val4 = v4;
	bang();
}

function msg_int(v1, v2, v3, v4)
{
	post("received int " + v1 + " " + v2 + " " + v3 + " " + v4 + "\n");
	val1 = v1;
	val2 = v2;
	val3 = v3;
	val4 = v4;
	bang();
}