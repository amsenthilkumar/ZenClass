num=int(input())
s=0
temp=num
order=len(str(abs(num)))
while temp>0:
 digit=temp%10
 s+=digit**order
 temp//=10
if num == s:
 print(num,"is an armstrong num")
else:
 printf(num,"is not armstrong num")