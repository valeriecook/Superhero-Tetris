function BlockPiece() {
	this.color = 1;
	this.gridX = 4;
	this.gridY = -2;
	this.currentShape = 0;
	
	this.shape1 = [ [1,1],
					[1,1] ];
					
	this.shapes = [ this.shape1 ];
};
	
function LinePiece() {
	this.color = 2;
	this.gridX = 5;
	this.gridY = -4;
	this.currentShape = 0;
	
	this.shape1 = [ [1],
					[1],
					[1],
					[1] ];

	this.shape2 = [ [1,1,1,1] ];
		
	this.shapes = [ this.shape1, this.shape2 ];	
};

function LPiece() {
	this.color = 3;
	this.gridX = 4;
	this.gridY = -3;
	this.currentShape = 0;
	
	this.shape1 = [ [1,0],
					[1,0],
				    [1,1] ];
	
	this.shape2 = [ [0,0,1],
					[1,1,1] ];
	
	this.shape3 = [ [1,1],	
			   		[0,1],
					[0,1]];
					
	this.shape4 = [ [1,1,1],
					[1,0,0] ];
	 
	this.shapes = [this.shape1, this.shape2, this.shape3, this.shape4];	
};
	
function ReverseLPiece() {
	this.color = 4;
	this.gridX = 4;
	this.gridY = -3;
	this.currentShape = 0;
	
	this.shape1 = [ [0,1],
					[0,1],
				    [1,1] ];
	
	this.shape2 = [ [1,1,1],
					[0,0,1] ];
	
	this.shape3 = [ [1,1],	
					[1,0],
			  		[1,0] ];
					
	this.shape4 = [ [1,0,0],
					[1,1,1] ];
	 
	this.shapes = [this.shape1, this.shape2, this.shape3, this.shape4];
};
	
function TPiece() {
	this.color = 5;
	this.gridX = 4;
	this.gridY = -2;
	this.currentShape = 0;
	
	this.shape1 = [ [1,1,1],
					[0,1,0] ];
					
	this.shape2 = [ [1,0],
					[1,1],
					[1,0] ];
					
	this.shape3 = [ [0,1,0],
					[1,1,1] ];
					
	this.shape4 = [ [0,1],
					[1,1],
					[0,1] ];
					
	this.shapes = [ this.shape1, this.shape2, this.shape3, this.shape4 ];	
};
	
function ZPiece() {
	this.color = 6;
	this.gridX = 4;
	this.gridY = -2;
	this.currentShape = 0;
	
	this.shape1 = [ [1,1,0],
					[0,1,1] ];
					
	this.shape2 = [ [0,1],
					[1,1],
					[1,0] ];

	this.shapes = [ this.shape1, this.shape2 ];	
};
	
function ReverseZPiece() {
	this.color = 0;
	this.gridX = 4;
	this.gridY = -2;
	this.currentShape = 0;
	
	this.shape1 = [ [0,1,1],
					[1,1,0] ];
					
	this.shape2 = [ [1,0],
					[1,1],
					[0,1] ];

	this.shapes = [ this.shape1, this.shape2 ];
};

function getRandomPiece() {
	var numPieces = 7; 
	var piece = Math.floor( Math.random() * numPieces );
	
	switch (piece) {
		case 0:
			piece = new BlockPiece();
			break;
		
		case 1:
			piece = new LinePiece();
			break;
		
		case 2:
			piece = new LPiece();
			break;
		
		case 3: 
			piece = new ReverseLPiece();
			break;
			
		case 4:
			piece = new TPiece();
			break;
		
		case 5:
			piece = new ZPiece();
			break;
			
		case 6: 
			piece = new ReverseZPiece();
			break;
	}
	return piece;
};