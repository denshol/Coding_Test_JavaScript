function solution(num_str) {
    let sum=0;
    for(let i =0;i<num_str.length;i++){
        
    
    sum+=+num_str.charAt(i)
    }
    return sum;
}