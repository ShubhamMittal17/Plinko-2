class particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.4,
		
			
      }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		this.color=color(random(0.255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var Particlepos=this.body.position;		
            push()
			translate(Particlepos.x, Particlepos.y);
		    fill(this.color);
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop()
			
	}

}