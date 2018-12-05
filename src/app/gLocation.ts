export class gLocation {
    
    private _ggrPos: string;
    lat: number;
    lng: number;
    show: boolean;
    /**
    * A string taken from the boat information on the ggr website.
    * this is of the form "40° 32.34 S, 115° 17.44 E"
    **/
    constructor(){
      this.show = false;
    }


    get ggrPos(){
	return this._ggrPos;
    }

    set ggrPos(ggrPos: string){
        this._ggrPos = ggrPos;
        this.setGGRPos(ggrPos);
        this.show = true;
    }

    getLatFromGGRLat(latStr: string){
        var dir = latStr.substr(-1, 1);
        var positive = true;
        if(dir == "S"){
            positive = false;
        }
        var degrees = this.getDegrees(latStr, positive);
        return degrees;
    }

     getLongFromGGRLng(latStr: string){
        var dir = latStr.substr(-1, 1);
        var positive = true;
        if(dir == "W"){
            positive = false;
        }
        var degrees = this.getDegrees(latStr, positive);
        return degrees;
    }

    getDegrees(val: string, isPositive: boolean) {
        // Find string upto degree sign.
        var idx = val.indexOf("°");
        if (idx != -1) {
            var deg = val.substr(0, idx);
            console.log("deg is " + deg)
            var degNum = parseInt(deg, 10);
            console.log("degNum is " + degNum.toString());
            var min = val.substr(idx + 2, val.length - 2);
            console.log("min is " + min);
            var minNum = parseInt(min, 10);
            console.log("minNum is " + minNum);
            var degNum = degNum + (minNum / 60.0);
            if(isPositive){
                return degNum;
            } else {
                return 0.0 - degNum;
            }
        } else {
            return 0.0;
        }
    }

    setGGRPos(ggrTrackerPos: string){
        var split = ggrTrackerPos.split(",", 2)
        var latStr = split[0];
        var longStr = split[1];
        this.lat = this.getLatFromGGRLat(latStr);
        this.lng = this.getLongFromGGRLng(longStr);
    }

    getWindyLatLong(){
	return "https://www.windy.com/" + this.lat.toString() + "/" + this.lng.toString();
    }
}
