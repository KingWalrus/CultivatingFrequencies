inlets = 1;
outlets = 3;


var pointer = 0;
var buffer = [];
var sort = [];
var median, mean;

function bang()
{
	outlet(0, buffer);
	outlet(1, sort);
	outlet(2, median);
}

function msg_int(i)
{
	fifo(i);
	sorter(i);
}

function fifo(i)
{
	buffer[pointer%5] = i;
	pointer++;
}	

function sorter(i)
{
	
	for(var i = 0; i < 5; i++)
		sort[i] = buffer[i];
	sort.sort();
	median = sort[2];
	
}