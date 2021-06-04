import React from "react";
import BlogImg from "../../assets/images/blog.jpg";

const DetailBlog = () => {
  return (
    <div className="flex flex-col w-full md:w-3/4 mx-auto mt-5 justify-center items-center">
      <div>
        <img src={BlogImg} className="max-w-lg object-cover object-center rounded" />
      </div>
      <div>
        <h3 className="font-bold text-3xl">Title Blog</h3>
        <p className="text-gray-600">Author - 27 Februari 1997</p>
        <p className="mt-3">
          Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
        </p>
      </div>
    </div>
  );
};

export default DetailBlog;
