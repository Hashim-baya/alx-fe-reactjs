import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedSearchResults } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      if (username) {
        const userData = await fetchUserData(username);
        setResults([userData]);
      } else {
        const query = [
          location && `location:${location}`,
          minRepos && `repos:>${minRepos}`,
        ]
          .filter(Boolean)
          .join(' ');
        const advancedResults = await fetchAdvancedSearchResults(query);
        setResults(advancedResults.items || []);
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  const [page, setPage] = useState(1);

const handleLoadMore = async () => {
  setLoading(true);
  try {
    const query = [
      location && `location:${location}`,
      minRepos && `repos:>${minRepos}`,
    ]
      .filter(Boolean)
      .join(' ');
    const advancedResults = await fetchAdvancedSearchResults(`${query}&page=${page + 1}`);
    setResults((prevResults) => [...prevResults, ...advancedResults.items]);
    setPage(page + 1);
  } catch (err) {
    setError("Unable to load more results.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold">{user.login}</h2>
                {user.location && <p>Location: {user.location}</p>}
                {user.public_repos !== undefined && <p>Repositories: {user.public_repos}</p>}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
