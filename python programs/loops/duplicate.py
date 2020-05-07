list=[3,6,6,1,2,2,5,5,5,9,9,7,4]
dupitems=[]
uniqitems={}
for x in list:
 if x not in uniqitems:
  uniqitems[x]=1
 else:
  if uniqitems[x]==1:
   dupitems.append(x)
   uniqitems[x]+=1
print(dupitems)
print(uniqitems)
