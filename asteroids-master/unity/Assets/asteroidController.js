#pragma strict
var directionX:int;
var directionY:int;
var direction:Vector3;
function Start () {
	directionX = Random.Range(-5,5);
	directionY = Random.Range(-5,5);
	
	direction = Vector3(directionX, directionY, 0);
	
}

function Update () {
	var rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).x;
	var leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	var bottom = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,Screen.height,0)).y;
	var top = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;

	transform.Rotate(Vector3.forward*50*Time.deltaTime);	
	
	transform.Translate(direction*Time.deltaTime, Space.World);	
	
	if(transform.position.x < leftmost)
		transform.position.x = rightmost;
		
	if(transform.position.x > rightmost)
		transform.position.x = leftmost;
		
	if(transform.position.y > bottom)
		transform.position.y = top;
		
	if(transform.position.y < top)
		transform.position.y = bottom;	
	
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "asteroid")
	{
		Destroy(this.gameObject);
	}
}