/**
 * Given two integers, n and m. The task is to check the relation between n and m.
 * Your Task:  
    You don't need to read input or print anything. Your task is to complete the function compareNM() which takes two integer n and m as input parameters and returns string
    'lesser' if n < m
    'equal' if n == m
'greater' if n > m
 */
class Solution {
  /**
    * @param number n
    * @param number m
    
    * @returns string
    */
  compareNM(n, m) {
    // code here
    if (n < m) {
      return "lesser";
    } else if (n > m) {
      return "greater";
    } else if ((n = m)) {
      return "equal";
    }
  }
}
