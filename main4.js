function stringMultiplicar(n) {
        var resultado="";
    for(i=1;i<=10;i++){
        resultado+=n+"x"+i+"="+(n*i);
        if((i+1)<=10)
        {
        resultado+="/";
        }
    }
    return resultado;
}
