import React from "react";
import { FaDollarSign, FaSearch } from "react-icons/fa";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatIcon from "../components/ChatIcon";
import { Link } from "react-router-dom";

const AnimalDescription = () => {
  const AnimalDescriptionItem = {
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
    name: "Rajanpuri Bakra",
    city: "Multan",
    viewCount: "150",
    color: "white",
    price: 450,

    description:
      "A rajanpuri Ngara Quality Male for sale, age 7 month, kheera, healthy and active, buy with Guarantee of payment, CARGO available, charges separate",
    category: "Goat",
    posted: "1 day ago",
  };

  return (
    <>
      <Header />
      <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
        <div className="container mx-auto px-4">
          <ReactImageGallery
            showBullets={false}
            showFullscreenButton={false}
            showPlayButton={false}
            items={AnimalDescriptionItem.images}
          />
        </div>

        <div className="mx-auto px-5 lg:px-5">
          <h2 className="pt-3 text-2xl font-bold lg:pt-0 text-black">
            {AnimalDescriptionItem.name}
          </h2>

          <p className="font-bold">
            City:{" "}
            <span className="font-normal">{AnimalDescriptionItem.city}</span>
          </p>
          <p className="font-bold">
            Category:{" "}
            <span className="font-normal">
              {AnimalDescriptionItem.category}
            </span>
          </p>
          <p className="font-bold">
            viewed By:{" "}
            <span className="font-normal">
              {AnimalDescriptionItem.viewCount}
            </span>
          </p>
          <p className="font-bold">
            Color :{" "}
            <span className="font-normal">{AnimalDescriptionItem.color}</span>
          </p>
          <p className="font-bold">
            Posted :{" "}
            <span className="font-normal">{AnimalDescriptionItem.posted}</span>
          </p>
          <p className="mt-4 text-4xl font-bold text-violet-900">
            ${AnimalDescriptionItem.price}{" "}
          </p>
          <p className="pt-0 text-sm leading-5 text-gray-500">
            {AnimalDescriptionItem.description}
          </p>

          <div className="mt-7 flex flex-row items-center gap-6">
            <button className="flex h-12 w-1/3 items-center justify-center bg-green-900 text-white duration-100 hover:bg-black focus:outline-none">
              <FaDollarSign className="mr-2" />
              <span className="whitespace-nowrap">Predict Price</span>
            </button>
            <button className="flex h-12 w-1/3 items-center bg-green-900 text-white duration-100  hover:bg-black focus:outline-none">
              <FaSearch className="mr-2" />
              <span className="whitespace-nowrap">Detect Breed</span>
            </button>
          </div>

          <ChatIcon />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AnimalDescription;
