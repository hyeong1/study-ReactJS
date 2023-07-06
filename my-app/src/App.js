import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0); // ����ڰ� �Է��ϴ� �޷�
  const [cost, setCost] = useState(0); // ������ ���� ����
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setDollar(event.target.value); // dollar ����
  const onSelect = (event) => {
    setCost(event.target.value);
  }; // cost ����

  return (
    <div>
      <h1>The Coins! {loading ? "" : coins.length}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
      <form>
        <input
          type="number"
          placeholder="input dollar"
          onChange={onChange}
          value={dollar}
        />
        {cost === 0 ? (
          <span
            style={{
              marginLeft: "5px",
            }}
          >
            Chose the coin
          </span>
        ) : (
          <span
            style={{
              marginLeft: "5px",
            }}
          >
            You can get {dollar / cost}
          </span>
        )}
      </form>
    </div>
  );
}

export default App;
