import { createServer } from "miragejs";

const fakePost = {
  platform: "facebook",
  date: new Date(),
  message: "jews are so bad... very bad!!!",
  url: "20531316728%2Fposts%2F10154009990506729%2F",
};

const anotherFakePost = {
  platform: "twitter",
  date: new Date(),
  message: "arrrrrgh, herzel was full of ****",
  url: "1537060486440689664",
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

    this.post("/report", (schema, request) => {
      const URL = request.requestBody.URL;
      const reasons = request.requestBody.reasons;
      const other = request.requestBody.other;
      console.log(request.requestBody);
      return request.requestBody;
    });
  },
});
