n=int(input())
a=0
b=1
print(a,b)
for i in range(2,n):
 s=a+b
 a=b
 b=s
 print(s)