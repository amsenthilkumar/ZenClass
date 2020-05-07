def firstDigit(n) : 
  
    # Remove last digit from number 
    # till only one digit is left 
    while n >= 10:  
        n = n / 10; 
      
    # return the first digit 
    return int(n) 
  
# Find the last digit 
def lastDigit(n) : 
  
    # return the last digit 
    return (n % 10) 
  
# Driver Code 
n = 98562; 
print(firstDigit(n), end = " ")  
print(lastDigit(n)) 