import "./Repo.css";
import {
  PieChart,
  Doughnut,
  ColumnChart,
  BarChart,
} from "../ComponentContainer";
import { useStateContext } from "../../Context";

const Repos = () => {
  const { reposData } = useStateContext();
  const langs = reposData.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});
  const MostUsed = Object.values(langs)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const LangStars = Object.values(langs)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  let { stars, forks } = reposData.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className="charts">
      <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <PieChart chartData={MostUsed} />
        </div>
        <div className="col-12 col-md-6 offset-md-2">
          <ColumnChart chartData={stars} />
        </div>
        <div className="col-12 col-md-4">
          <Doughnut chartData={LangStars} />
        </div>
        <div className="col-12 col-md-6 offset-md-2">
          <BarChart chartData={forks} />
        </div>
      </div>
    </section>
  );
};

export default Repos;
