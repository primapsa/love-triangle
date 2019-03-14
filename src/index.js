/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var count=0;
for (var n=0; n<preferences.length; n++){   
  if(preferences[n]!==(n+1)){
    if(preferences[preferences[preferences[n]-1]-1]===(n+1)){
        count++;       
      }
  } 
}  
  return (count/3);
}
 