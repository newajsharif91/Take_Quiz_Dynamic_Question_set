import React from "react";

const HeaderDeatils = () => {
  return (
    <div>
      <div className="hero py-20 bg-stone w-10/12 mx-auto rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-36">
          <img
            src="https://www.bahamianstudio.com/wp-content/uploads/2020/08/team-designers-working-computer-gif-the-bahamian-studio-branding-graphic-design-flyers-logos-printing-marketing-nassau-bahamas.gif"
            className="md:max-w-sm  rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:text-left text-center ">
            <h2 className="text-5xl lg:py-20 py-3 font-bold animation-text">
              Test Youself with{" "}
              <span className="text-7xl text-orange-500">Quiz-Munia</span>
            </h2>
            <p className="py-6">
              <strong>
                Take an IQ test, career test or personality test online now. Get
                serious answers for career assessment, intelligence and
                personality.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDeatils;
