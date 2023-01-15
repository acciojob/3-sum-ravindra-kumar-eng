function threeSum(arr, x) {
  //your code here
	let closedtsum=Number.MAX_VALUE;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
				if(Math.abs(x-closedtsum)>Math.abs(x-(arr[i]+arr[j]+arr[k])))
					closedtsum=(arr[i]+arr[j]+arr[k]);
			}
		}
	}
	return closedtsum
}

module.exports = threeSum;
