function isBalanced(s) {
    const pila = [];
    const par = {'(':')','[':']','{':'}'};

    for (let i = 0; i < s.length; i++) {
        const br = s[i];
        if(br in par){
            pila.push(br);
        }else{
            if(par[pila.pop()] !== br){
                return "NO";
            };
        };
    };
    return "YES";
}

const s = '[(({]}))]';
console.log(isBalanced(s));