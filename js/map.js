let gameMap = [];

var tileW = 40, tileH = 40;
var mapW = 100, mapH = 10;
function drawMap(){


for(var y = 0; y < mapH; ++y)
	{
		for(var x = 0; x < mapW; ++x)
		{
            switch(gameMap[((y*mapW)+x)])
			{
				case 1:
                    drawRect(x*tileW,y*tileH, tileW, tileH, 'red')
					break;
                default:
                    drawRect(x*tileW,y*tileH, tileW, tileH, 'black')
					
			}

            
        }
    }
}