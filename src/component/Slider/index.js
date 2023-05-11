import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import imge from "../../photos/wardroom.jpg";

export default function SliderImages({ pageType }) {
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        {
            url: "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
        },
        {
            url: "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
        },
        {
            url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
        },
        {
            url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
        },
    ];

    const sliderImages1 = [
        "/images/wardroom.jpg","/images/shirt.jpg","/images/shirt1.jpg","/images/set.jpg","/images/shirt2.jpg"
    ];
    return (
        <div>
          {pageType === "firstSlider" && <SimpleImageSlider
                width={400}
                height={400}
                images={sliderImages1}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
                onStartSlide={(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay={3}
            />}
           {pageType === "secondSlider" && <SimpleImageSlider
                width={400}
                height={400}
                images={sliderImages}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
                onStartSlide={(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay={3}
            />}
            {pageType === "thirdSlider" && <SimpleImageSlider
                width={400}
                height={400}
                images={sliderImages1}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
                onStartSlide={(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay={3}
            />}
        </div>
    );
}