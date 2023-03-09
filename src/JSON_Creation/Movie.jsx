import React from "react"
const Movie=(props)=>{
    return(
        <>
        <h1 style={{color:"blue",textAlign:"center"}}>Highest Grossing Movies</h1>
        < div className="main">
            <div className="sub">
            <img src={props.payload[0].img} alt="" />
    <h1>{props.payload[0].rank}</h1>
    <h1>{props.payload[0].movieName}</h1>
    <h1>{props.payload[0].actorName}</h1>
    <h1>{props.payload[0].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[1].img} alt="" />
    <h1>{props.payload[1].rank}</h1>
    <h1>{props.payload[1].movieName}</h1>
    <h2>{props.payload[1].actor}</h2>
    <h1>{props.payload[1].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[2].img} alt="" />
    <h1>{props.payload[2].rank}</h1>
    <h1>{props.payload[2].movieName}</h1>
    <h1>{props.payload[2].actor}</h1>
    <h1>{props.payload[2].globalCollection}</h1>
            </div>
           <div className="sub">
            <img src={props.payload[3].img} alt="" />
    <h1>{props.payload[3].rank}</h1>
    <h1>{props.payload[3].movieName}</h1>
    <h1>{props.payload[3].actor}</h1>
    <h1>{props.payload[3].globalCollection}</h1>
            </div>
            
            <div className="sub">
            <img src={props.payload[4].img} alt="" />
    <h1>{props.payload[4].rank}</h1>
    <h1>{props.payload[4].movieName}</h1>
    <h1>{props.payload[4].actor}</h1>
    <h1>{props.payload[4].globalCollection}</h1>
            </div></div> <br />
            <div class="main1">
            <div className="sub">
            <img src={props.payload[5].img} alt="" />
    <h1>{props.payload[5].rank}</h1>
    <h1>{props.payload[5].movieName}</h1>
    <h1>{props.payload[5].actor}</h1>
    <h1>{props.payload[5].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[6].img} alt="" />
    <h1>{props.payload[6].rank}</h1>
    <h1>{props.payload[6].movieName}</h1>
    <h1>{props.payload[6].actor}</h1>
    <h1>{props.payload[6].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[7].img} alt="" />
    <h1>{props.payload[7].rank}</h1>
    <h1>{props.payload[7].movieName}</h1>
    <h1>{props.payload[7].actor}</h1>
    <h1>{props.payload[7].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[8].img} alt="" />
    <h1>{props.payload[8].rank}</h1>
    <h1>{props.payload[8].movieName}</h1>
    <h1>{props.payload[8].actor}</h1>
    <h1>{props.payload[8].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[9].img} alt="" />
    <h1>{props.payload[9].rank}</h1>
    <h1>{props.payload[9].movieName}</h1>
    <h1>{props.payload[9].actor}</h1>
    <h1>{props.payload[9].globalCollection}</h1>
            </div></div> <br />
            <div class="main1">
            <div className="sub">
            <img src={props.payload[10].img} alt="" />
    <h1>{props.payload[10].rank}</h1>
    <h1>{props.payload[10].movieName}</h1>
    <h1>{props.payload[10].actor}</h1>
    <h1>{props.payload[10].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[11].img} alt="" />
    <h1>{props.payload[11].rank}</h1>
    <h1>{props.payload[11].movieName}</h1>
    <h1>{props.payload[11].actor}</h1>
    <h1>{props.payload[11].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[12].img} alt="" />
    <h1>{props.payload[12].rank}</h1>
    <h1>{props.payload[12].movieName}</h1>
    <h1>{props.payload[12].actor}</h1>
    <h1>{props.payload[12].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[13].img} alt="" />
    <h1>{props.payload[13].rank}</h1>
    <h1>{props.payload[13].movieName}</h1>
    <h1>{props.payload[13].actor}</h1>
    <h1>{props.payload[13].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[14].img} alt="" />
    <h1>{props.payload[14].rank}</h1>
    <h1>{props.payload[14].movieName}</h1>
    <h1>{props.payload[14].actor}</h1>
    <h1>{props.payload[14].globalCollection}</h1>
            </div></div><br />
            <div class="main1">
            <div className="sub">
            <img src={props.payload[15].img} alt="" />
    <h1>{props.payload[15].rank}</h1>
    <h1>{props.payload[15].movieName}</h1>
    <h1>{props.payload[15].actor}</h1>
    <h1>{props.payload[15].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[16].img} alt="" />
    <h1>{props.payload[16].rank}</h1>
    <h1>{props.payload[16].movieName}</h1>
    <h1>{props.payload[16].actor}</h1>
    <h1>{props.payload[16].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[17].img} alt="" />
    <h1>{props.payload[17].rank}</h1>
    <h1>{props.payload[17].movieName}</h1>
    <h1>{props.payload[17].actor}</h1>
    <h1>{props.payload[17].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[18].img} alt="" />
    <h1>{props.payload[18].rank}</h1>
    <h1>{props.payload[18].movieName}</h1>
    <h1>{props.payload[18].actor}</h1>
    <h1>{props.payload[18].globalCollection}</h1>
            </div>
            <div className="sub">
            <img src={props.payload[19].img} alt="" />
    <h1>{props.payload[19].rank}</h1>
    <h1>{props.payload[19].movieName}</h1>
    <h1>{props.payload[19].actor}</h1>
    <h1>{props.payload[19].globalCollection}</h1>
            </div></div>
           
        
        </>
    )

}
export default Movie