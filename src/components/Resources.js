import React from "react";
import getResources from "../Functions/getResources";

const Resources = ({ invType }) => {
  const resourcesArray = getResources(invType);

  return (
    <section className="pt-12 lg:pt-24 mx-4 lg:mx-0">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <p className="section-title text-white section-title md:text-3xl text-left max-w-[622px] mx-auto">
            Further resources to learn about {invType.toLowerCase()} investments
          </p>
          {resourcesArray.map((resource) => {
            return (
              <div className="section-subtitle text-left lg:text-lg mb-4 max-w-[622px] mx-auto text-blue">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="norefferer"
                  className="hover:text-blue-400 underline text:text-blue"
                >
                  {resource.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
