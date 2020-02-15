function num_factors(a){
    var factors = [],i;

    for(i=1;i<=Math.floor(Math.sqrt(a));i+=1)
    {
        if (a%i === 0)
        {
            factors.push(i);
            if(a/i !== i)
                factors.push(a/i);
        }
    }
    factors.sort(function(x,y){ return x-y;});
    return factors;    
}
var num = prompt("Please enter the number:");

console.log(num_factors(num));
