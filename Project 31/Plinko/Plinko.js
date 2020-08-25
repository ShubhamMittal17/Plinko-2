class plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.6,
			density:1.2,
      
			
      }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		//this.color=color(random(0.255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var Plinkopos=this.body.position;		
            push()
			translate(Plinkopos.x, Plinkopos.y);
		    fill("darkslateblue");
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop()
			
	}

}