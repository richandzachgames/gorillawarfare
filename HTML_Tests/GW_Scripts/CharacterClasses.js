// Player and AI Character Classes

//Human Units
function HumanUnits(MX,MY,I,MC){
	this.HumanX = MX;
	this.HumanY = MY;
	this.image = I;
	this.hmovecount = HMC;
}
function Marine(){
	return new HumanUnits(0,0,0,4);
}

//Gorilla Units
function GorillaUnits(GX,GY,I,MC){
	this.GorillaX = GX;
	this.GorillaY = GY;
	this.image = I;
	this.gmovecount = GMC;
}
function Gorilla(){
	return new GorillaUnits(0,0,1,5);
}