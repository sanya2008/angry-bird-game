class pig{
    constructor(x,y){
        var option={
            restitution:1,
            friction:1,
            density:1
        }
        this.w=50
        this.h=50
        this.body=Bodies.rectangle(x,y,50,50,option)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
    var angle=this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill ("pink")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }

}