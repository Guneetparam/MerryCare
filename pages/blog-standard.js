import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { getPagination, pagination } from "../src/utils";

const BlogStandard = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-blog-post", sort, active);
    let list = document.querySelectorAll(".single-blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layouts>
      <PageBanner title={"Services"} bgnone />
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-loop">
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="assets/img/blog/01.jpg" alt="Image" />
                    <Link href="/blog-details">
                      <a className="post-link">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <a href="#" className="post-author"></a>
                    <h3 className="post-title">
                      <Link href="#">
                        <a>
                          Empowering Individuals with Disabilities to Achieve
                          their Goals
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Merry Care Disability Services is a leading provider of
                      support services for people with disabilities in
                      Melbourne, Victoria, Australia. Our organization offers a
                      range of services, including individual support, respite
                      care, group activities, community access, and more. Our
                      mission is to develop the skills and capabilities that
                      allow individuals to live as independently as possible and
                      contribute to society. At Merry Care Disability Services,
                      we pride ourselves on offering a superior service to
                      participants through our individual-cantered approach. We
                      empower participants with skills and capabilities to
                      achieve their life goals, with a focus on enhancing their
                      ability to live autonomously. Our team of highly skilled
                      and dedicated professionals is passionate about making a
                      positive difference in the lives of those we serve. As a
                      registered NDIS provider, we provide NDIS support
                      coordination and plan management services. We believe in
                      providing the highest quality services to our clients and
                      making a lasting impact in our community. Our services are
                      designed to help individuals with disabilities achieve
                      their goals and aspirations, and to live fulfilling lives.
                      We offer a range of services to support individuals with
                      disabilities, including development of life skills,
                      assistance with personal activities, daily tasks in group
                      or shared living, group and centre activities, social and
                      community participation, and assistance with travel and
                      transportation. We also offer home schooling or tuition
                      services as per the Victorian Curriculum. Our development
                      of life skills service provides training and activities to
                      develop participants' ability to live as autonomously as
                      possible. We offer assistance with personal activities
                      such as meal planning, cooking, cleaning, ironing, and
                      other general services. Our daily tasks in group or shared
                      living service supports participants to live on their own
                      or in a shared living arrangement of their choice. Our
                      group and center activities service offers a variety of
                      social, creative, capacity-building, and other activities,
                      helping participants make new friendships and develop new
                      skills. Our social and community participation service
                      arranges social and community events and assists
                      participants in taking part in a variety of community
                      events and gatherings. Our assistance with travel and
                      transportation service arranges and assists with travel
                      and transportation to support access to work, education,
                      or other activities. At Merry Care Disability Services, we
                      always see the capabilities of our participants and love
                      to support them in developing the skills for living
                      independently. We provide a supportive environment to
                      enhance their capabilities, support their career,
                      day-to-day tasks, mental and physical health, and more. We
                      believe in excellence of service, and our team is
                      dedicated to providing the highest quality services to our
                      clients. If you or a loved one is in need of disability
                      support services, please contact us today to learn more
                      about how we can help. We are committed to making a
                      positive difference in the lives of those we serve and
                      helping individuals with disabilities achieve their goals
                      and aspirations.
                    </p>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="assets/img/blog/02.jpg" alt="Image" />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default BlogStandard;
