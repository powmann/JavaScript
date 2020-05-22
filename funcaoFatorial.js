function fatorial (num) {
    var result = 0;
    if (num < 0) {
        alert("apenas numeros inteiros maiores ou igual a zero");
    } else{
    if (num == 0) {
        num = 1;
    } 
        result = num;
        while (num > 1) {
            num--;
            result = result * num;
        }
        alert(result);
    }
}

