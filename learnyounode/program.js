var total = 0;

if(process.argv.length <= 2)
	console.log('input error');
else {
	for(var i = 2; i< process.argv.length; i++){
		        total += Number(process.argv[i]);
	}
}

console.log(total);
