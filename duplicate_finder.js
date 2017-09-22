function firstDuplicate(a) {
        let i =0;
        f_duplicate(i);
        function f_duplicate(i, r = -1, result){
            a = [2,3,3,1,5,2];
            let k = i+1;
            for(let j=i+1; j<a.length; j++){
                if(a[i]=== a[j]){
                    if(r === -1){
                        r = j;
                    }else if(r>j){
                        r = j;
                        result = a[r];
                        return result;
                    }
                }
                if(j === a.length-1){
                    i = i+1;
                    f_duplicate(i,r);
                }
            }
        }
    }
    firstDuplicate();