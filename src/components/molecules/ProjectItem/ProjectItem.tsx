import React from "react";
import styled from "styled-components";
import { FaCheck, FaPen, FaTimes, FaUser } from "react-icons/fa";
import IconButton from "components/atoms/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useDatabase } from "hooks/useDatabase";
import { Project, removeProject } from "Store/Actions/projectsActions";

interface IProps {
  project: Project;
}

interface IPropsUserIcon {
  color: string;
}

const ProjectItem: React.FC<IProps> = ({ project }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const database = useDatabase();

  const handleOnDelete = () => {
    dispatch(removeProject(project.id));
    database.deleteObject("projects", project.id);
  };

  const handleOnEdit = () => {
    navigate("/add-project", { state: project });
  };
  return (
    <Wrapper>
      <ProjectNameWrapper>
        <ProjectName title={project.name}>
          {" "}
          <StyledUserIcon color={project.color} />
          {project.name}
        </ProjectName>
        <ButtonWrapper>
          <IconButton onClick={handleOnDelete} icon={FaTimes} />
          <IconButton onClick={handleOnEdit} icon={FaPen} />
        </ButtonWrapper>
      </ProjectNameWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const ProjectNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
`;

const ProjectName = styled.h3`
  font-size: 18px;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledUserIcon = styled(FaUser)<IPropsUserIcon>`
  margin-right: 10px;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

export default ProjectItem;
