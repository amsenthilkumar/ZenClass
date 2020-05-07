#print(list(range(0,5)))
fruits=['apple','banana','grapes']
def search(val):
 for i in fruits:
  if (val==i): 
   return True
y=search('grapes')
print(y)