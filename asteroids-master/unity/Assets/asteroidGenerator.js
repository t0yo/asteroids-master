#pragma strict
var asteroidPrefab:Rigidbody;
var starttime:float;
var currtime:float;
static var elapsedTime:float;

function Start () {
	for( var i=0;i<5;i++)
	{
		createAsteroid();
	}
	starttime = Time.time;

}

function Update () {
	currtime = Time.time;
	elapsedTime = currtime-starttime;
	
	if(elapsedTime > 60 || GameObject.FindGameObjectsWithTag("asteroid").Length == 0)
	{
		Application.LoadLevel(0);
	}
}

function createAsteroid()
{
	var rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).x;
	var leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	var bottom = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).y;
	var top = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
	var where:Vector3 = Vector3(Random.Range(leftmost, rightmost), Random.Range(top, bottom), 2);
	
	Instantiate(asteroidPrefab, where, Quaternion.identity);
}

