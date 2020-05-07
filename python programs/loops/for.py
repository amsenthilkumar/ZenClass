l1=input().split()
count=1
for i in range(0,len(l1)):
  for j in range(i+1,len(l1)):
    if (l1[i]==l1[j]):
        count=count+1
        break
  if(count>1):
     break
print(l1[i],count)
    