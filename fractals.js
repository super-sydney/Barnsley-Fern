var x = 0, y = 0, xNext, yNext, r, tmp, tmp2;

function setup(){
	createCanvas(900, 900);
	background(0);
}

var vars = {
	a: [0, 		0.85, 	0.2,   -0.15],
	b: [0, 		0.04,  -0.26, 	0.28],
	c: [0, 	   -0.04, 	0.23, 	0.26],
	d: [0.16, 	0.85, 	0.22, 	0.24],
	f: [0, 		1.6, 	1.6, 	0.44],
	p: [0.01, 	0.85, 	0.07, 	0.07]
};

const getEl = function(val){return document.getElementById(val)};



function draw(){
	updateVals();

	for (var i = 0; i < 10000; i++){

		r = random();

		if (r < vars.p[0]){
			xNext = vars.a[0]*x + vars.b[0]*y;
			yNext = vars.c[0]*x + vars.d[0]*y + vars.f[0];
		}else if (r < vars.p[0]+vars.p[1]){
			xNext = vars.a[1]*x + vars.b[1]*y;
			yNext = vars.c[1]*x + vars.d[1]*y + vars.f[1];
		}else if (r < vars.p[0]+vars.p[1]+vars.p[2]){
			xNext = vars.a[2]*x + vars.b[2]*y;
			yNext = vars.c[2]*x + vars.d[2]*y + vars.f[2];
		}else{
			xNext = vars.a[3]*x + vars.b[3]*y;
			yNext = vars.c[3]*x + vars.d[3]*y + vars.f[3];
		}

		x = xNext;
		y = yNext;

		
		point(map(x, -4, 4, 0, width), map(y, 0, 12, height, 0));
		stroke(0, 255, 0);
		
	}

}

function updateVals(){

	let aCurrent = [vars.a[0], vars.a[1], vars.a[2], vars.a[3]],
		aUser = [getEl("a0").value, getEl("a1").value, getEl("a2").value, getEl("a3").value],
		bCurrent = [vars.b[0], vars.b[1], vars.b[2], vars.b[3]],
		bUser = [getEl("b0").value, getEl("b1").value, getEl("b2").value, getEl("b3").value],
		cCurrent = [vars.c[0], vars.c[1], vars.c[2], vars.c[3]],
		cUser = [getEl("c0").value, getEl("c1").value, getEl("c2").value, getEl("c3").value],
		dCurrent = [vars.d[0], vars.d[1], vars.d[2], vars.d[3]],
		dUser = [getEl("d0").value, getEl("d1").value, getEl("d2").value, getEl("d3").value];

	if (!aCurrent.every((val, ind) => (val === aUser[ind]))){
		background(0);
		vars.a = aUser;
	}else if (!bCurrent.every((val, ind) => (val === bUser[ind]))){
		background(0);
		vars.b = bUser;
	}else if (!cCurrent.every((val, ind) => (val === cUser[ind]))){
		background(0);
		vars.c = cUser;
	}else if (!dCurrent.every((val, ind) => (val === dUser[ind]))){
		background(0);
		vars.d = dUser;
	}
}