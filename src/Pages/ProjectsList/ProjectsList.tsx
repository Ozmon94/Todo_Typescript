import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "Store/Reducers";
import ProjectItem from "components/molecules/ProjectItem/ProjectItem";

const ProjectsList: React.FC = () => {
  const projects = useSelector((store: RootState) => store.projects);
  return (
    <Wrapper>
      <Title>Projekty:</Title>
      <ProjectWrapper>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ProjectWrapper>
    </Wrapper>
  );
};

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 10px;
`;

const Wrapper = styled.div``;

const Title = styled.h2``;

export default ProjectsList;
