import "../Github.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Github = () => {
  const [githubRepos, ReposState] = useState([]);
  const [githubRepoPage, RepoPageState] = useState(2);
  const [githubReposCount, ResposCountState] = useState(0);
  const [githubRepoHasMore, RepoHasMoreState] = useState(true);

  const getGithubRepo = async () => {
    RepoPageState(githubRepoPage + 1);
    await axios
      .get(
        "https://api.github.com/search/repositories?q=created:>2022-04-21&sort=stars&order=desc&page=" +
          githubRepoPage
      )
      .then((repoResults) => {
        const APIResponse = repoResults.data;
        APIResponse.items.map((ResponseItem) =>
          ReposState((githubRepos) => [...githubRepos, ResponseItem])
        );
        githubReposCount === githubRepos.length && RepoHasMoreState(false);
      })
      .catch((response) => alert(response.message));
  };

  const DaysDiff = (Date1, Date2) => {
    let diffTime = Math.abs(Date2 - Date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + " days";
  };

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/repositories?q=created:>2022-04-21&sort=stars&order=desc"
      )
      .then((repoResults) => {
        const APIResponse = repoResults.data;
        RepoHasMoreState(true);
        ResposCountState(APIResponse.total_count);
        ReposState(APIResponse.items);
      })
      .catch((response) => alert(response.message));
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={githubRepos.length}
        next={getGithubRepo}
        hasMore={githubRepoHasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {githubRepos.map((githubRepo, keyhandle) => (
          <div className="githubRepo" key={keyhandle}>
            <div className="githubRepoUserAvatar">
              <img
                src={githubRepo.owner.avatar_url}
                alt={githubRepo.owner.login}
              />
            </div>
            <div className="githubRepoInfo">
              <h5> {githubRepo.name} </h5>
              <h6> {githubRepo.description} </h6>
              <div className="githubRepoInfoExtras">
                <p> Stars: {githubRepo.stargazers_count.toLocaleString()} </p>
                <p> Issues: {githubRepo.open_issues.toLocaleString()} </p>
                <label>
                  Submitted
                  {" " +
                    DaysDiff(new Date(githubRepo.created_at), new Date())}{" "}
                  ago by
                  {" " + githubRepo.owner.login}
                </label>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Github;
