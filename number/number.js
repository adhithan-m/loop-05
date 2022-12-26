var n =parseInt(prompt("Enter the number"));
sum = 0
while(n>0)
{
	var rem = n%10
	sum = sum+rem;
	n=(n-rem)/10;
}
console.log(sum)

/*var n =parseInt(prompt("Enter the number"));
sum = 0
sum1 = 0
while(n>0)
{
	var rem = n%10
	if(rem%2==0)
	{
		sum=sum+rem;
	}
	else
	{
		sum1=sum1+rem;
	}
	n=(n-rem)/10;
}
console.log(sum,sum1)*/

