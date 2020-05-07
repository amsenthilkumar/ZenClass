list1=[10,20,20,20,10,30]
list2=[]
uniqlist=[]
for i in range(len(list1)):
 count=1
 for j in range(i+1,len(list1)):
  if (list[i]==list[j]):
   count+=1
  if(count>1):
   list2.append(list1[i])
   if list1[i] not in uniqlist:
    uniqlist.append(list[i])
  print(uniqlist) 
 

