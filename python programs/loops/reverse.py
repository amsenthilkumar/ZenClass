n=int(input("num"))
rev=0
while n>0:
n=n%10
rev=rev*10+n
n=n//10

