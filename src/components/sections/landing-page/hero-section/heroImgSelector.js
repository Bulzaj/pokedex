import heroImage2 from "../../../../assets/hero-images/hero-2.jpg";
import heroImage1 from "../../../../assets/hero-images/hero-1.jpg";
import heroImage3 from "../../../../assets/hero-images/hero-3.jpg";
import heroImage4 from "../../../../assets/hero-images/hero-4.jpg";
import heroImage5 from "../../../../assets/hero-images/hero-5.jpg";
import heroImage6 from "../../../../assets/hero-images/hero-6.jpg";
import heroImage7 from "../../../../assets/hero-images/hero-7.jpg";
import heroImage8 from "../../../../assets/hero-images/hero-8.jpg";
import heroImage9 from "../../../../assets/hero-images/hero-9.jpg";
import heroImage10 from "../../../../assets/hero-images/hero-10.jpg";
import heroImage11 from "../../../../assets/hero-images/hero-11.png";
import heroImage12 from "../../../../assets/hero-images/hero-12.jpg";
import heroImage13 from "../../../../assets/hero-images/hero-13.jpg";
import heroImage14 from "../../../../assets/hero-images/hero-14.jpg";
import heroImage15 from "../../../../assets/hero-images/hero-15.jpg";
import heroImage16 from "../../../../assets/hero-images/hero-16.jpg";
import heroImage17 from "../../../../assets/hero-images/hero-17.jpg";
import heroImage18 from "../../../../assets/hero-images/hero-18.jpg";
import heroImage19 from "../../../../assets/hero-images/hero-19.jpg";
import heroImage20 from "../../../../assets/hero-images/hero-20.jpg";
import heroImage21 from "../../../../assets/hero-images/hero-21.jpg";

const heroImgSelector = function () {
  const imageList = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
    heroImage7,
    heroImage8,
    heroImage9,
    heroImage10,
    heroImage11,
    heroImage12,
    heroImage13,
    heroImage14,
    heroImage15,
    heroImage16,
    heroImage17,
    heroImage18,
    heroImage19,
    heroImage20,
    heroImage21,
  ];

  const random = Math.floor(Math.random() * imageList.length);

  return imageList[random];
};

export default heroImgSelector;
