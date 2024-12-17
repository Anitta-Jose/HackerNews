import { useEffect, useState } from "react";
import "../styles/Stories.css";

export const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // To make API calls and to set the 'loading' and 'stories' states
    const getStories = async () => {
      try {
        // Fetching Ids of the stories initially
        const topStoriesIds = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const topStoriesIdsResponse = await topStoriesIds.json();

        // From the Ids fetched, retrieving the content of each id
        const getStoriesFromIds = async (topStoriesIds) => {
          const storiesPromises = topStoriesIds.map((storyId) =>
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
            ).then((res) => res.json())
          );
          return await Promise.all(storiesPromises);
        };
        const initialStories = await getStoriesFromIds(
          topStoriesIdsResponse.slice(0, 15)
        );
        setStories(initialStories);
        setLoading(false);
      } catch (error) {
        console.error("Sorry! Error occurred while fetching stories", error);
        setLoading(false);
      }
    };
    getStories();
  }, []);

  return (
    <main className="stories-container" aria-label="Main content with stories">
      {loading && <div className="stories-loading">Loading Stories...</div>}
      {stories.map((story) => (
        <article
          key={story.id}
          className="story-card"
          aria-label="Story details"
        >
          <div className="card-content">
            <h3 className="story-title">
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
              </a>
            </h3>
            <div className="story-description">
              <div className="story-content">
                {story.score} points by {story.by}
              </div>
              <div className="story-content">
                {new Date(story.time * 1000).toLocaleString()}
              </div>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};
