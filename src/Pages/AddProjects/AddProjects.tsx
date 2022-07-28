import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "components/atoms/FormInput/FormInput";
import Button from "components/atoms/Button/Button";
import ColorInput from "components/atoms/ColorInput/ColorInput";
import {
  addProject,
  editProject,
  Project,
} from "Store/Actions/projectsActions";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useDatabase } from "hooks/useDatabase";

const AddProjects: React.FC = () => {
  const editState = useLocation().state as Partial<Project>;
  const isEdit = !!editState?.id;
  const dispatch = useDispatch();
  const database = useDatabase();
  const navigate = useNavigate();
  const [name, setName] = useState<string>(editState?.name ?? "");
  const [color, setColor] = useState<string>(editState?.color ?? "#000000");

  const buttonLabel = isEdit ? "Edytuj projekt" : "Dodaj projekt";

  const handleAddProject = (e: React.MouseEvent) => {
    e.preventDefault();

    const newProject: Project = {
      id: editState?.id ?? uuidv4(),
      name: name,
      color: color,
    };

    if (isEdit) {
      dispatch(editProject(newProject));
      database.editObject("projects", newProject);
    } else {
      dispatch(addProject(newProject));
      database.createObject("projects", newProject);
    }
    navigate("/projects");
  };

  return (
    <Wrapper>
      <Title>Dodaj Projekt</Title>
      <Form>
        <FormInput
          id={"project-name"}
          label={"Nazwa Projektu"}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <ColorInput
          id={"project-color"}
          label={"Kolor projektu"}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <Button type={"button"} onClick={handleAddProject}>
          {buttonLabel}
        </Button>
      </Form>
    </Wrapper>
  );
};

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  flex-direction: column;
`;
export default AddProjects;
