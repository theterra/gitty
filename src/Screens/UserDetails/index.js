import {
  Box,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import PersonalInfo from "Components/PersonalInfo";
import { useCallback, useEffect, useMemo, useState } from "react";
import { githubClient } from "Api";
import Header from "Components/Header";
import { useSearchParams } from "react-router-dom";
import { ReactComponent as NoDataFoundSvg } from "Icons/NoDataFound.svg";
import { ReactComponent as WaitingToSearchSvg } from "Icons/WaitingToSearch.svg";
import RePieChart from "Components/Charts/RePieChart";
import ReBarChart from "Components/Charts/ReBarChart";
import StatContainer from "Components/StatContainer";
import { transformDataForBarChart } from "Utils/userDetailsUtils";
import MessageBoard from "Components/MessageBoard";

function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("userId"));
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

  return (
    <Box>
      <Header
        searchValue={searchValue}
        onSearchChange={onSearchChangeHandler}
        onSubmit={onSubmit}
      />
      <Container maxW="1200px" mt="10">
        {isLoading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : !userId ? (
          <MessageBoard
            component={WaitingToSearchSvg}
            title="Waiting To Search..."
          />
        ) : userData?.login ? (
          <Grid gridTemplateColumns="minmax(20vw, 20%) auto" maxHeight={0}>
            <PersonalInfo
              avatarUrl={userData.avatar_url}
              fullname={userData.name}
              userid={userData.login}
              bio={userData.bio}
              followers={userData.followers}
              following={userData.following}
            />

            <Flex width="100%" height="100%" flexDirection="column">
              <SimpleGrid
                columns="2"
                spacing="10"
                ml="2rem"
                height="100%"
                width="100%"
              >
                <StatContainer title="Languages">
                  <RePieChart data={languages} />
                </StatContainer>
                <StatContainer title="Top 5 large repos">
                  <ReBarChart data={repoSizes} />
                </StatContainer>
                <StatContainer title="Top 5 forked repos">
                  <ReBarChart data={forkedRepos} />
                </StatContainer>
                <StatContainer title="Top 5 open issues">
                  <ReBarChart data={openIssues} />
                </StatContainer>
              </SimpleGrid>
            </Flex>
          </Grid>
        ) : (
          <MessageBoard component={NoDataFoundSvg} title="No Data Found" />
        )}
      </Container>
    </Box>
  );
}

export default UserDetails;
