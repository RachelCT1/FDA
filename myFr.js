function myFr(){
	var area = width * height;
	var verNum = g.nodes.leghth;
	var edgeNum = g.links.length;
	var iterations = verNum / 2;
	var optimal_K = Math.sqrt(area / verNum);
	var Fa, Fr;
	var nodes = g.nodes;
	var links = g.links;
	for(var i=0; i<iterations; i++){
		
		}
	// calculate repulsive
	function calrepulsive(){
		var deltaX, deltaY, dist;
		for(var n=0; n<verNum; n++){
			nodes[n].posX = 0;
			nodes[n].posY = 0;
			for(var m=0; m<verNum; m++){
				deltaX = nodes[n].posX - nodes[m].posX;
				deltaY = nodes[n].posY - nodes[m].posY;
				dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				Fr = -(optimal_K * optimal_K) / dist;
				if(dist != 0){
					nodes[n].posX += deltaX / dist * Fr;
					nodes[n].posY += deltaY / dist * Fr;
				}
			}
		}		
	}
	// calculate attractive
	function calattractive(){
		var e_deltaX, e_deltaY, E_dist;
		var nSource;
		var nTarget;
		for(var n=0; n<edgeNum; n++){
			e = links[i];
			nSource = e.source;
			nTarget = e.target;
			e_deltaX = nSource.posX - nTarget.posX;
			e_deltaY = nSource.posY - nTarget.posY;
			e_dist = Math.sqrt(e_deltaX * e_deltaX + e_deltaY * e_deltaY);
			Fa = e_dist * e_dist / optimal_K; 
			if(e_dist != 0){
				nSource.posX -= e_deltaX / e_dist * Fa;
				nSource.posY -= e_deltaY / e_dist *Fa;
				nTarget.posX += e_deltaX / e_dist * Fa;
				nTarget.posY += e_deltaY / e_dist * Fa;
			}
		}
	}
	// limit displacement
	function limitPla(){
		for(var n=0; n < verNum; n++){
			nodes[n].x = min(width / 2, max(-width / 2, nodes[n].x));
			nodes[n].y = min(height / 2,max(-height / 2, node[n].y));
		}
	}
	// cool
	function cool(){
		
	}
}
