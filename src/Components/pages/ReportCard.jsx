import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox as MuiCheckbox } from "@mui/material";
import PostCard from "../Validate/PostCard";
import axios from "axios";
import postReport from "../Hooks/postReport";
import ThankYouWindow from "../Validate/ThankYouWindow";

const options = [
  "Minimizing the holocaust",
  "Disputing facts",
  "Jews benifit from the holocaust",
  "Equating Israel to the Nazis",
];

const onHandleSubmit = async (URL, reasons, other) => {
  const response = await postReport(URL, reasons, other);
};
const URL = "google.com";
export default function ReportCard() {
  const [formData, setFormData] = useState({});
  const [didSendForm, setDidSendForm] = useState(false);

  if (didSendForm === false)
    return (
      <Wrapper>
        <Header>Report Post:</Header>

        <SubHeader>What defamation did you find here?</SubHeader>
        <Form>
          <List>
            {options.map((option) => (
              <ListItem key={option}>
                <MuiCheckbox
                  name={option}
                  onChange={(event) => {
                    const value = event.target.name;
                    setFormData({
                      ...formData,
                      reasons: {
                        ...formData.reasons,
                        [event.target.name]: event.target.checked,
                      },
                    });
                  }}
                  size="medium"
                />
                <Label>{option}</Label>
              </ListItem>
            ))}
          </List>

          <OtherReason>
            <span style={{ textAlign: "left", fontWeight: 600 }}>Other:</span>
            <TextBox
              onChange={(event) => {
                const value = event.target.value;
                setFormData({ ...formData, other: value });
              }}
              placeholder="Type your reason here..."
            ></TextBox>
          </OtherReason>
          <SubmitButton
            onClick={async () => {
              try {
                await onHandleSubmit(URL, formData.reasons, formData.other);
                setDidSendForm(true);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Submit
          </SubmitButton>
          <hr
            style={{
              backgroundColor: "grey",
              width: 515,
              marginLeft: 0,
              marginTop: 64,
              marginBottom: 45,
            }}
          />
        </Form>
        <h4 style={{ textAlign: "left" }}>Selected Post:</h4>

        <PostCard
          arrayTags={[
            "Alon",
            "Ronder",
            "Tag1",
            "Tag2",
            "Tag3",
            "Tag4",
            "Tag5",
            "Tag6",
            "Tag7",
            "Tagggggggggg8",
          ]}
          platform={"facebook"}
          date={"31/05/22"}
          postUrl={"google.com"}
        />
      </Wrapper>
    );

  if (didSendForm)
    return (
      <Wrapper>
        <ThankYouWindow />
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
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: white;
  width: 515px;
  height: 133vh;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
`;
const Header = styled.h3`
  text-align: left;
  margin-top: 65px;
`;
const SubHeader = styled.h4`
  text-align: left;
`;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 24px;
  padding: 0px;
`;
const TextBox = styled.textarea`
  resize: none;
  margin-top: 9px;
  border: none;
  border-radius: 10px;
  width: 515px;
  height: 98px;
  background: #f7f7f8;
  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 36px;
    padding-top: 14px;
  }
  :-ms-input-placeholder {
    padding-left: 36px;
    padding-top: 14px;
  }
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
