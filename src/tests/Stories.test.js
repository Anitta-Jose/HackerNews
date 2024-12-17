import { render, screen, waitFor } from "@testing-library/react";
import { Stories } from "../components/Stories";

global.fetch = jest.fn();

// Mocking Data
const mockTopStoriesIds = [100, 200];
const mockStoriesData = [
  {
    id: 100,
    title: "Story 1",
    url: "https://example.com/story1",
    by: "author1",
    score: 100,
    time: 1714500000,
  },
  {
    id: 200,
    title: "Story 2",
    url: "https://example.com/story2",
    by: "author2",
    score: 200,
    time: 1714503600,
  },
];

describe("Stories Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("Render Stories component", () => {
    render(<Stories />);
    expect(screen.getByText(/Loading Stories/i)).toBeInTheDocument();
  });

  test("fetches and displays stories", async () => {
    fetch
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockTopStoriesIds),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockStoriesData[0]),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockStoriesData[1]),
      });

    render(<Stories />);

    expect(screen.getByText(/loading stories/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Story 1")).toBeInTheDocument();
      expect(screen.getByText("Story 2")).toBeInTheDocument();
    });

    expect(screen.getByText("100 points by author1")).toBeInTheDocument();
    expect(screen.getByText("200 points by author2")).toBeInTheDocument();
  });
});
