a=int(input("Enter the distance:"))
b=int(input("Enter the peaktime:"))
if a>5:
	a=a-5
	fare=int(a*8+100)		
else:
	print("Fare: 100")
if b>1 and b<10:
	fare=int(fare+0.25*fare)
print("Fare: ",fare)

	