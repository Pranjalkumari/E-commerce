import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl to-current pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />

        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_img}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
              Welcome to Forever, your trusted destination for premium fashion,
              cutting-edge gadgets, or eco-friendly products. At Forever, we believe in offering more than just products. We strive
              to create an experience that blends quality, affordability, and
              convenience. Our mission is to bring the best [product category,
              e.g., clothing, technology, home essentials] from around the world
              directly to your doorstep.
            </p>
            <p>Founded in 2024, Forever began as a small idea fueled by passion and determination. Today, we&apos;ve grown into a thriving online marketplace with a diverse range of products and a commitment to excellence. Whether you&apos;re shopping for the latest trends, everyday essentials, or one-of-a-kind items, we’ve got you covered.</p>
            <b className="text-gray-800">Our Mission</b>
            <p>We aim to create a global community of happy customers by delivering products that inspire and delight. Sustainability and innovation are at the core of everything we do, ensuring that we not only meet your needs but also contribute positively to the world around us.</p>
          </div>
        </div>

        <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600"> We source our items from trusted suppliers to ensure that you get nothing but the best.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Customer-Centric Service:</b>
            <p className="text-gray-600"> Your satisfaction is our top priority. From secure payments to prompt delivery, we go the extra mile to make your shopping experience seamless.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Affordable Pricing:</b>
            <p className="text-gray-600"> High-quality doesn’t have to mean high prices. We work tirelessly to keep our prices competitive without compromising on quality.</p>
          </div>

        </div>

        <NewsletterBox/>
      </div>
    </div>
  );
};

export default About;
