import React from "react";
import FeedBackForm from "../components/FeedBackForm";
import FeedBackStats from "../components/FeedBackStats";
import FeedBackList from "../components/FeedBackList";

const Home = () => {
  return (
    <>
      <FeedBackForm />
      <FeedBackStats />
      <FeedBackList />
    </>
  );
};
export default Home;
