import React from 'react';
const HouseCard = ({house}) => {//jsx version

    return (
        <div className= "houseItem">
            <img className="houseImage" src={require(`${house.imageSrc}`)} alt={altTitle(house.imageSrc)}></img>
            <div className="descriptionBox">
                <div className="briefInformationBox">${house.pricePerWeek}pw<img className="roomsIcon" src={require("./images/Frame 222.jpg")}></img></div>
                {/* <div class="underLineBox"></div> */}
            </div>
            <p className="address">{house.address}</p>
            <p className="suburb">{house.suburb}, Auckland</p>
            <p className="description">{house.description}</p>

        </div>


    );
}

function altTitle(imgSrc){
    let altTitle=imgSrc.substring(9);
    altTitle=altTitle.substring(0,altTitle.length-4);
    return altTitle;
}
export default HouseCard;