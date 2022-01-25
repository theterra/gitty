import { Box, Container, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import PersonalInfo from "Molecules/PersonalInfo";
import Header from "Molecules/Header";
import { ReactComponent as NoDataFoundSvg } from "Icons/NoDataFound.svg";
import { ReactComponent as WaitingToSearchSvg } from "Icons/WaitingToSearch.svg";
import RePieChart from "Molecules/Charts/RePieChart";
import ReBarChart from "Molecules/Charts/ReBarChart";
import ChartContainer from "Molecules/Charts/ChartContainer";
import MessageBoard from "Molecules/MessageBoard";
import SkeletonLoader from "Atoms/SkeletonLoader";
import { useUserDetails } from "./useUserDetails";

function UserDetails() {
  const {
    // state
    userData,
    isLoading,
    searchValue,
    userId,

    // handelrs
    onSubmit,
    onSearchChangeHandler,

    // list
    languages,
    repoSizes,
    forkedRepos,
    openIssues,
  } = useUserDetails();

  console.log(forkedRepos);

  return (
    <Box>
      <Header
        searchValue={searchValue}
        onSearchChange={onSearchChangeHandler}
        onSubmit={onSubmit}
      />
      <Container maxW="1200px" mt="10">
        {isLoading ? (
          <SkeletonLoader />
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
                <ChartContainer
                  title="Languages"
                  data={languages}
                  component={RePieChart}
                />
                <ChartContainer
                  title="Top 5 large repos"
                  data={repoSizes}
                  component={ReBarChart}
                />
                <ChartContainer
                  title="Top 5 forked repos"
                  data={forkedRepos}
                  component={ReBarChart}
                />
                <ChartContainer
                  title="Top 5 open issues"
                  data={openIssues}
                  component={ReBarChart}
                />
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
