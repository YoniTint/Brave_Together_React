import React from "react";
import styled from "styled-components";
import { Checkbox as MuiCheckbox } from "@mui/material";

const options = [
  " Minimizing the holocaust",
  " Disputing facts",
  "Jews benifit from the holocaust",
  "Equating Israel to the Nazis",
];
export default function ReportCard() {
  return (
    <Wrapper>
      <Header>Report Post:</Header>

      <SubHeader>What defamation did you find here?</SubHeader>
      <Form>
        <List>
          {options.map((option) => (
            <ListItem key={option}>
              <MuiCheckbox size="medium" />
              <Label>{option}</Label>
            </ListItem>
          ))}
        </List>

        <OtherReason>
          <span style={{ textAlign: "left", fontWeight: 600 }}>Other:</span>
          <TextBox placeholder="Type your reason here..."></TextBox>
        </OtherReason>
        <SubmitButton>Submit</SubmitButton>
        <hr style={{ backgroundColor: "grey", width: 515, marginLeft: 0 }} />
      </Form>
    </Wrapper>
  );
}

const OtherReason = styled.div`
  width: 324px;
  height: 128px;
  display: flex;
  flex-direction: column;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  /* font-weight: 600;
  text-align: center; */
  height: 37px;
  line-height: 37px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 40%;
  padding-left: 50px;
  padding-right: 50px;
  position: fixed;
  top: 0px;
  right: 0px;
`;
const Header = styled.h3`
  text-align: left;
`;
const SubHeader = styled.h4`
  text-align: left;
`;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const TextBox = styled.textarea`
  resize: none;
  margin-top: 9px;
  border: none;
  border-radius: 10px;
  width: 515px;
  height: 98px;
  background: #f7f7f8;
`;
const SubmitButton = styled.button`
  width: 515px;
  height: 45px;
  background: #2c63fd;
  border-radius: 15px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border: none;
  margin-top: 32px;
`;
