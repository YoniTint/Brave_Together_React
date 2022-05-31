import { createServer } from "miragejs";

const fakePost1 = {
  platform: "facebook",
  date: new Date(),
  message: "jews are so bad... very bad!!!",
  url: "https://www.google.com",
  arrayTags: ["tag1", "tag2", "tag3", "LONG tag4", "tag5", "LONGERERERER tag6", "tag77", "tag8", "tag1", "tag2", "tag3", "LONG tag4", "tag5", "LONGERERERER tag6", "tag77", "tag8"],
};

const fakePost2 = {
  platform: "twitter",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "https://www.twitter.com",
  arrayTags: [],
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

const posts = [fakePost1, fakePost2, fakePost3, fakePost4, fakePost5, fakePost6];

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
  },
});
