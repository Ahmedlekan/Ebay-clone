import { categories } from "@/constant";
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

const sliderCategory = categories.map( (category:any, index:number)=>(
    <div key={index} className="px-2 relative">
        <div>
        <Image src={category.img} width={250} height={250} alt="categories image" />
        </div>
        <p className=" font-semibold text-center">{category.name}</p>

    </div>
))

export default function Category() {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 7,
        swipeToSlide: true,
        afterChange: function(index:number) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };

  return ( 
    
    <div className='max-w-[1200px] mx-auto mt-10 relative'>
        <h2 className="text-2xl font-semibold mb-5 hover:underline">
            Explore Popular Categories
        </h2>
        <div className="max-w-[1200px]">
            <Link href="/allproducts" className="absolute top-0 
                right-0 underline"
            >
            See all
            </Link>
            <Slider {...settings}>
                {sliderCategory}
            </Slider>
        </div>

    </div>
    
  );
};