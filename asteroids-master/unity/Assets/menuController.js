#pragma strict

var x:int;
var y:int;

//the skin of menu text
var theme:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){
	//apply theme
	GUI.skin = theme;
	
	var xLength = Screen.width/2;
	var yLength = Screen.height/2;
	
	//label at x,y position
	GUI.Label(Rect(xLength-150,yLength-70,300,25),"Space Invaders");
	
	
	//creating a button
	if(GUI.Button(Rect(xLength-50,yLength-40,100,30),"New Game"))
	{
		//new game was clicked
		Application.LoadLevel(1);
	}
}