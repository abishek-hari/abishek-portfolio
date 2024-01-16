import React from "react";
import "./Projects.css";
import { projects, singleProject } from "../../data";
import { useParams, Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const { id } = useParams();
  const project = singleProject.find((p) => p.id === Number(id));

  const filteredProject = projects.filter(
    (project) => project.id !== Number(id)
  );

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    title,
    img,
    githubLink,
    websiteLink,
    icons,
    techstack,
    description,
    project__goal_title,
    project__goal_desc,
    project__lesson_desc,
    project__lesson_title,
    project__webstack__desc,
    project__webstack__title,
  } = project;

  return (
    <div className='container section'>
      <div className='project__summary project-section'>
        <h2 className='project__title'>{title}</h2>
        <p className='project__description'>{description}</p>
        <div className='project__stack'>
          <div className='project__preview'>
            <button className='project__stack-btn'>
              <AiFillGithub className='project__icon' />
              <a
                href={githubLink}
                target='_blank'
                className='project__icon-name'
              >
                github
              </a>
            </button>
            <button className='project__stack-btn'>
              <AiFillGithub className='project__icon' />
              <a
                href={websiteLink}
                target='_blank'
                className='project__icon-name'
              >
                View Site
              </a>
            </button>
          </div>
          <h3 className='tech__stack'>
            Tech Stack :
            <p className='stack-name-con'>
              {techstack.map((stack, index) => {
                return (
                  <span key={index} className='stack-name'>
                    {stack}
                  </span>
                );
              })}
            </p>
          </h3>
        </div>
      </div>
      <div className='project__img-box project-section'>
        <img src={img} alt={title} className='project__main-img' />
      </div>
      <div className='project__purpose-section project-section'>
        <h2 className='project__purpose-title'>{project__goal_title}</h2>
        <p className='project__purpose-desc'>{project__goal_desc}</p>
      </div>
      <div className='project__webstack-section project-section'>
        <div className='webstack__icons'>
          {icons.map((icon, index) => {
            return <div key={index}>{icon}</div>;
          })}
        </div>
        <div className='webstack__info'>
          <h2 className='project__webstack-title'>
            {project__webstack__title}
          </h2>
          <p className='project__webstack-desc'>{project__webstack__desc}</p>
        </div>
      </div>
      <div className='project__lessons-section project-section'>
        <h2 className='project__lesson-title'>{project__lesson_title}</h2>
        <p className='project__lesson-desc'>{project__lesson_desc}</p>
      </div>
      <div className='other__projects-section project-section'>
        <h2 className='other__projects-title'>Other projects</h2>
        <div className='work__box'>
          {filteredProject.map((project) => {
            const { id, img, title, desc } = project;
            return (
              <div className='work__card' key={id}>
                <div className='work-img-container'>
                  <img src={img} alt={title} className='work__img' />
                </div>
                <div className='work__info'>
                  <h2 className='work__info-title'>{title}</h2>
                  <p className='work__info-desc'>{desc}</p>
                  <Link
                    to={`/project/${id}`}
                    className='work__btn'
                    onClick={scrollToTop}
                  >
                    view project <FaAngleDoubleRight className='fa__arrow' />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
