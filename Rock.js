class Rock{
	constructor(x,y,r)
	{
	var options={
		restitution: 0.8,
		friction:0.9,
		density:12
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
			fill("red");
			rect(0,0,this.r,this.r)

			pop()
	}

}