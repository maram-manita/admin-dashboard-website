import "./App.css";
import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import { ThemeContext } from "./ThemeProvider";
import Meaning from "./components/Meaning";
import Skeleton from "@mui/material/Skeleton";

function App() {
  const [storedData, setStoredData] = useState("");
  const [isSerif, setIsSerif] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("keyboard");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const savedData = localStorage.getItem("dictionaryData");
    const prevQuery = localStorage.getItem("query");
    if (savedData && prevQuery === query) {
      const savedDataParsed = JSON.parse(savedData);
      if (isError) {
        setStoredData(savedDataParsed);
      } else {
        setStoredData(savedDataParsed[0]);
      }
      localStorage.setItem("query", query);
      setIsLoading(false);

      return;
    } else {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        );
        const data = await response.json();
        localStorage.setItem("query", query);
        localStorage.setItem("dictionaryData", JSON.stringify(data));
        if (Array.isArray(data)) {
          setIsError(false);
          setStoredData(data[0]);
          setIsLoading(false);
        } else {
          setIsError(true);
          setStoredData(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <div
        className="App"
        style={{
          background: theme.background,
          color: theme.color,
          fontFamily: isSerif ? "Pona" : "'Montserrat', sans-serif",
        }}
      >
        <Header
          moonColor={theme.moonColor}
          color={theme.color}
          background={theme.background}
          gray={theme.gray}
          isSerif={isSerif}
          setIsSerif={setIsSerif}
        />
        <SearchBar
          gray={theme.gray}
          color={theme.color}
          setQuery={setQuery}
          query={query}
          fetchData={fetchData}
          isSerif={isSerif}
        />
        {storedData && !isLoading ? (
          !isError ? (
            <>
              <Title
                purple={theme.purple}
                word={storedData.word}
                phonetics={storedData.phonetics}
              />
              {storedData.meanings.map((meaning) => (
                <Meaning
                  meaning={meaning}
                  gray={theme.gray}
                  key={meaning.definitions[0].definition}
                />
              ))}
              <Footer
                gray={theme.gray}
                color={theme.color}
                sourceUrl={storedData.sourceUrls[0]}
              />
            </>
          ) : (
            <div className="error-div">
              <h1>{storedData.title}</h1>
              <p>{storedData.message}</p>
            </div>
          )
        ) : (
          <div className="loading-div">
            <Skeleton
              sx={{ backgroundColor: theme.gray }}
              variant="rounded"
              width="100%"
              height={100}
            />
            <Skeleton
              sx={{ backgroundColor: theme.gray }}
              variant="rounded"
              width="100%"
              height={30}
            />
            <Skeleton
              sx={{ backgroundColor: theme.gray }}
              variant="rounded"
              width="100%"
              height={600}
            />
            <Skeleton
              sx={{ backgroundColor: theme.gray }}
              variant="rounded"
              width="100%"
              height={30}
            />
            <Skeleton
              sx={{ backgroundColor: theme.gray }}
              variant="rounded"
              width="100%"
              height={600}
            />
            <Skeleton
              sx={{ backgroundColor: theme.gray, fontSize: "1rem" }}
              variant="text"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
