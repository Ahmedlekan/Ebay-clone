import { categories } from "@/constant";
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";


const SampleNextArrow = (props:any) => {
    const { onClick } = props;
    return (
      <div
        className="w-14 h-14 rounded-full text-white bg-black 
        bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer 
        flex justify-center items-center z-10 absolute top-[35%] right-2"
        onClick={onClick}
      >
        <span className="text-xl">
          <FaLongArrowAltRight />
        </span>
      </div>
    );
  };
  
  const SamplePrevArrow = (props:any) => {
    const { onClick } = props;
    return (
      <div
        className="w-14 h-14 rounded-full text-black bg-gray-300 
        bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer 
        flex justify-center items-center absolute z-10 top-[35%] left-2"
        onClick={onClick}
      >
        <span>
          <FaLongArrowAltLeft />
        </span>
      </div>
    );
  };
  

export default function Category() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      };

  return ( 
    
    <div className='max-w-[1200px] mx-auto mt-10 relative'>
      
      <div className=" flex justify-between item-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold 
          hover:underline"
        >
            Explore Popular Categories
        </h2>

        <Link href="/allproducts" className="underline">
                See all
          </Link>
      </div>
        
        <div className="">
            <div>
                <Slider {...settings}>
                    {categories.map((category, index)=>(
                        <div key={index} className="p-2">
                            <div className="flex flex-col gap-2">
                                <Image src={category.img} width={200} 
                                        height={200} alt="categories image" 
                                        className=''
                                />
                                <p className=" font-semibold text-center">
                                    {category.name}
                                </p>    
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    </div>
    
  );
};