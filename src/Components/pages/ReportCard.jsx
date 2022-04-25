import React from "react";
import styled from "styled-components";

export default function ReportCard() {
  return (
    <Wrapper>
      <Header>Report Post:</Header>

      <SubHeader>What defamation did you find here?</SubHeader>
      <Form>
        <List>
          <ListItem>
            <Input type="checkbox"></Input>
            <Label> Minimizing the holocaust</Label>
          </ListItem>

          <ListItem>
            <Input type="checkbox"></Input>
            <Label> Disputing facts</Label>
          </ListItem>

          <ListItem>
            <Input type="checkbox"></Input>
            <Label> Jews benifit from the holocaust</Label>
          </ListItem>

          <ListItem>
            <Input type="checkbox"></Input>
            <Label> Equating Israel to the Nazis</Label>
          </ListItem>
        </List>

        <OtherReason>
          <span style={{ textAlign: "left", fontWeight: 600 }}>Other:</span>
          <TextBox placeholder="Type your reason here..."></TextBox>
        </OtherReason>
        <SubmitButton>Submit</SubmitButton>
      </Form>

      <hr style={{ backgroundColor: "grey" }} />
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
const Input = styled.input``;
const Label = styled.label`
  font-weight: 600;
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
