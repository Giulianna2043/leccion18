function factorial(n) {
    var entero=1;
    if(n<=0)
    {
      return null;  
    }
    else {
    for(var i=1; i<=n; i++)
        {
            entero=entero*=i;
        }
    return entero;
    }
}