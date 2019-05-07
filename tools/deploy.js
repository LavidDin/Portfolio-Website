import push from "git-push";

const remote = {
  name: "production",
  url: "https://laviddin.github.io/portfolio-website/",
  branch: "gh-pages"
};

export default async () => {
  await build();
  await new Promise(resolve => push("./build", remote, resolve));
};
