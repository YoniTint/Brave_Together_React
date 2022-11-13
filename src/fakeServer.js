import { createServer } from "miragejs";

const fakePost1 = {
  platform: "facebook",
  date: new Date(),
  message: "jews are so bad... very bad!!!",
  url: "20531316728%2Fposts%2F10154009990506729%2F",
};

const fakePost2 = {
  platform: "twitter",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "1537060486440689664",
};

const fakePost3 = {
  platform: "facebook",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "https://www.facebook.com",
  arrayTags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag77", "tag8"],
};

const fakePost4 = {
  platform: "twitter",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "https://www.twitter.com",
  arrayTags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag77", "tag8"],
};

const fakePost5 = {
  platform: "facebook",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "https://www.facebook.com",
  arrayTags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag77", "tag8"],
};

const fakePost6 = {
  platform: "twitter",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "https://www.twitter.com",
  arrayTags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag77", "tag8"],
};

const posts = [
  fakePost1,
  fakePost2,
  fakePost3,
  fakePost4,
  fakePost5,
  fakePost6,
];

createServer({
  routes() {
    this.namespace = "api";

    this.get("/posts", ({ db }) => {
      return posts;
    });

    this.get("/example", ({ db }) => {
      return "this is an example";
    });

    this.get("/falfel", ({ db }) => {
      return "this is a falafel";
    });

    this.post("/report", (schema, request) => {
      const URL = request.requestBody.URL;
      const reasons = request.requestBody.reasons;
      const other = request.requestBody.other;
      console.log(request.requestBody);
      return request.requestBody;
    });
  },
});
