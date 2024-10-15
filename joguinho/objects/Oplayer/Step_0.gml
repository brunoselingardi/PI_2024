if keyboard_check(ord("W"))
{
	y-=1
}

if keyboard_check(ord("S"))
{
	y+=1
}

if keyboard_check(ord("A"))
{
	x-=1
}

if keyboard_check(ord("D"))
{
	x+=1
}

if vidas<1
{
	room_restart()
	vidas=1
}

if tacos = 3
{
room_goto_next()
}