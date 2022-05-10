import { createServer } from "miragejs";

const fakePost = {
  platform: "facebook",
  date: new Date(),
  message: "jews are so bad... very bad!!!",
  url: "https://www.google.com",
};

const anotherFakePost = {
  platform: "twitter",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "https://www.twitter.com",
};

const posts = [fakePost, anotherFakePost];

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
