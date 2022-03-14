class Iron{
	constructor(x,y,r)
	{
	var options={
		restitution: 0.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, this.r,this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.r,this.r)

			pop()
	}

}