import React, { useState } from "react";
import './TestimonialSection.css'; // Assuming you have a CSS file for styles'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Row, Col } from "antd";
export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#977CE2] to-[#668AE8]">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10 text-center flex items-center gap-2 praise-text-head">
          Praise for <span className="text-4xl font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
            <path d="M26.7517 1.92718L14.9492 20.2628L26.7517 38.6808L27.2947 38.7839L35.4459 40.3721L22.426 20.2628L35.4459 0.132812L26.7517 1.92718Z" fill="white" />
            <path d="M9.7699 20.1428L0.576018 34.3112L7.77999 32.9006L15.9271 20.1229L7.75889 7.34546L0.554688 5.93457L9.7699 20.1428Z" fill="white" />
          </svg></span>
        </h2>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiperPraise"
      >
        <SwiperSlide>
          <Row style={{ width: "100%" }}>
            <img
              className="coll-logo"
              src="https://ik.imagekit.io/4v5br2pcf/Profill/Thapar%20Institute.png?updatedAt=1716746108955"
              alt="college-logo"
            ></img>
          </Row>
          <Row style={{ width: "100%" }}>
            <span className="praise-text">
              Profill gave me the option to easily apply at top colleges and
              saved my time and energy at a crucial point in my life. Thanks to
              Profill I got into Thapar!
            </span>
          </Row>
          <Row
            style={{ gap: "10px", display: "flex", marginTop: "40px" }}
            span={24}
          >
            <Col className="praise-avatar"></Col>
            <Col styles={{ width: "100%" }} span={16}>
              <span className="praise-user">Ankit Agarwal</span>
              <span className="praise-user-ed">B.Tech at TIET</span>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row style={{ width: "100%" }}>
            <span className="praise-text">
              Thanks to Profill they made the whole process stress free. Helped
              me discover top colleges matching my interest plus the automatic
              form filling saved me hours of time.
            </span>
          </Row>
          <Row
            style={{ gap: "10px", display: "flex", marginTop: "40px" }}
            span={24}
          >
            <Col className="praise-avatar"></Col>
            <Col styles={{ width: "100%" }} span={16}>
              <span className="praise-user">Ankit Agarwal</span>
              <span className="praise-user-ed">B.Tech at IIIT Delhi</span>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row style={{ width: "100%" }}>
            <span className="praise-text">
              Profill was my secret weapon during my 12th boards. I did not had
              to worry about my filling college application. They did it error
              free and securely.
            </span>
          </Row>
          <Row
            style={{ gap: "10px", display: "flex", marginTop: "40px" }}
            span={24}
          >
            <Col className="praise-avatar"></Col>
            <Col styles={{ width: "100%" }} span={16}>
              <span className="praise-user">Ankit Agarwal</span>
              <span className="praise-user-ed">B.Tech at IIIT Delhi</span>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-semibold mt-10 text-center flex items-center gap-2 swipe-text-head">
          Swipe for more
        </h2>
      </div>
    </section>
  );
} 