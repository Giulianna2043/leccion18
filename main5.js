function casiPalindrome(palabra) {
    var tamano=palabra.length;
    var palindrome;
    var count=0
    
    for (var i=0,j=tamano-1;i<tamano/2,j>tamano/2;i++,j--)
     {
         if(palabra[i]!=palabra[j])
             {
                 count++;
             }
     }
        if(count<=2)
             {
                    palindrome=true;
             }
    else
            {
                    palindrome=false;
            }
    return palindrome;
 
                                 }