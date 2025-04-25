function stringChop(str, size) {
 unction stringChop(str, size) {
   if(str.length === 0)
   {
	   return [];  
   }
	let result = [];
	for(int i=0;i<str.length;i=i+size)
	{
		let substr = str.slice(i,i+size);
		result.push(substr);
		return result;
	}

}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
