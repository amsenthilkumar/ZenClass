n=int(input())

# Initialize matrix 
string1=input()
matrix =string1.split()
R = int(input())
C = int(input()) 
  
print() 
  
# For user input 
for i in range(R):          # A for loop for row entries 
    a =[] 
    for j in range(C):      # A for loop for column entries 
         a.append(int(input())) 
    matrix.append(a) 
  
# For printing the matrix 
for i in range(R): 
    for j in range(C): 
        print(matrix[i][j], end = " ") 
    print() 