class box{
    constructor(x,y,w,h){
        var option={
            restitution:1,
            friction:1,
            density:1
        }
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
    var angle=this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill (green)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}



