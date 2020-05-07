def isnewupper(s):
  count=0
  for i in s:
   if i>='A' and i<='Z':
    count+=1
  if count==len(s):
    return True
  else:
    return False
isnewupper("s")
