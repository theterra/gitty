import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { githubClient } from "Api";
import { transformDataForBarChart } from "Utils/userDetailsUtils";

export const useUserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("userId") || "");
  const userId = searchParams.get("userId");

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const userDataResponse = await githubClient.getUserById(userId);
        const userReposResponse = await githubClient.getUserRepos(userId);
        setUserData(userDataResponse);
        setUserRepos(userReposResponse);
      } catch (e) {
        setUserData(null);
        setUserRepos(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [userId]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSearchParams({
        userId: searchValue,
      });
    },
    [searchValue, setSearchParams]
  );

  const onSearchChangeHandler = useCallback(
    (e) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  const languages = useMemo(() => {
    if (!userRepos?.length) return [];
    const filtered = userRepos.reduce((prev, item) => {
      if (!item.language) return prev;
      const prevLanguageCount = prev[item.language]?.value;
      return {
        ...prev,
        [item.language]: {
          name: item.language,
          value: prevLanguageCount ? prevLanguageCount + 1 : 1,
        },
      };
    }, {});

    return Object.values(filtered);
  }, [userRepos]);

  const repoSizes = useMemo(() => {
    if (!userRepos?.length) return [];
    return transformDataForBarChart(userRepos, "size");
  }, [userRepos]);

  const forkedRepos = useMemo(() => {
    if (!userRepos?.length) return [];
    const repos = userRepos.filter((item) => !item.fork);
    return transformDataForBarChart(repos, "forks");
  }, [userRepos]);

  const openIssues = useMemo(() => {
    if (!userRepos?.length) return [];
    return transformDataForBarChart(userRepos, "open_issues_count");
  }, [userRepos]);

  return {
    // state
    userData,
    userRepos,
    isLoading,
    searchParams,
    searchValue,
    userId,

    // set handlers
    setUserData,
    setUserRepos,
    setIsLoading,
    setSearchParams,
    setSearchValue,

    // handelrs
    onSubmit,
    onSearchChangeHandler,

    // list
    languages,
    repoSizes,
    forkedRepos,
    openIssues,
  };
};
