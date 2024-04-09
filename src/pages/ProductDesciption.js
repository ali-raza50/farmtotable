import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
// import "../Styles/ProductDesciption.css"; // Import your custom CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";
import Butter from "../img/Butter1.png";
import ChatIcon from "../components/ChatIcon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductDesciption = () => {
  const navigate = useNavigate();
  const ProductDesciptionItem = {
    images: [
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        thumbnail:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        original:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],

    name: "Milk Description",
    reviews: "150",
    availability: true,
    brand: "Olper",
    price: 450,
    previousPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
  };
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <>
      <Header />
      <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
        {/* image gallery */}
        <div className="container mx-auto px-4">
          <ReactImageGallery
            showBullets={false}
            showFullscreenButton={false}
            showPlayButton={false}
            items={ProductDesciptionItem.images}
          />

          {/* /image gallery  */}
        </div>
        {/* description  */}

        <div className="mx-auto px-5 lg:px-5">
          <h2 className="pt-3 text-2xl font-bold text-black lg:pt-0">
            {ProductDesciptionItem.name}
          </h2>
          <div className="mt-1">
            <div className="flex items-center">
              <Rater
                style={{ fontSize: "20px" }}
                total={5}
                interactive={false}
                rating={3.5}
              />

              <p className="ml-3 text-sm text-gray-400">
                ({ProductDesciptionItem.reviews})
              </p>
            </div>
          </div>
          <p className="mt-0 font-bold">
            Availability:{" "}
            {ProductDesciptionItem.availability ? (
              <span className="text-green-600">In Stock </span>
            ) : (
              <span className="text-red-600">Expired</span>
            )}
          </p>
          <p className="font-bold">
            Brand:{" "}
            <span className="font-normal">{ProductDesciptionItem.brand}</span>
          </p>

          <p className="mt-4 text-4xl font-bold text-violet-900">
            ${ProductDesciptionItem.price}{" "}
            <span className="text-xs text-gray-400 line-through">
              ${ProductDesciptionItem.previousPrice}
            </span>
          </p>
          <p className="pt-0 text-sm leading-5 text-gray-500">
            {ProductDesciptionItem.description}
          </p>

          <div className="mt-3">
            <p className="pb-2 text-xs text-gray-500">Quantity</p>
            <div className="flex">
              <button className={`${plusMinuceButton}`}>−</button>
              <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                1
              </div>
              <button className={`${plusMinuceButton}`}> +</button>
            </div>
          </div>

          <div className="mt-7 flex flex-row items-center gap-6">
            <button
              onClick={() => navigate("/cart")}
              className="flex h-12 w-1/3 items-center justify-center bg-green-900 text-white duration-100 hover:bg-black focus:outline-none"
            >
              <BiShoppingBag className="mr-2" />
              <span className="whitespace-nowrap"> Add to cart</span>
            </button>

            <button className="flex h-12 w-1/3 items-center bg-green-900 text-white duration-100  hover:bg-black focus:outline-none">
              <AiOutlineHeart className="mr-2" />
              <span className="whitespace-nowrap"> Wishlist</span>
            </button>
          </div>

          <ChatIcon />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDesciption;
