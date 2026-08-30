function looping(startNum, endNum, breakNum, contNum) {
    if ( startNum === undefined || endNum === undefined || breakNum === undefined || contNum === undefined) {
        console.log("Please enter your numbers");
        return;
    } 
    else{
      for (var i = startNum; i <= endNum; i++) {
        if (i === breakNum) {
            break;
        }
        if (i === contNum) {
            continue;
        }
        console.log(i);
      }  
    }
}
looping(1, 10, 8, 3);