const Assgn28 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold text-center">React Assignment 28</h1>

      {/* useState */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">useState</h2>
        <p>→ Stores data inside a component.</p>
        <p>→ UI updates when state changes.</p>
        <p>→ Direct update will NOT re-render.</p>

        <pre className="bg-black text-cyan-400 p-2 rounded mt-2 overflow-x-auto">
          {`const [count, setCount] = useState(0);
setCount(count + 1);`}
        </pre>
      </div>

      {/* useEffect */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">useEffect</h2>
        <p>→ Used for side effects (API, timers).</p>

        <ul className="list-disc ml-5">
          <li>useEffect(() =&gt; {}) → every render</li>
          <li>useEffect(() =&gt; {}, []) → once</li>
          <li>useEffect(() =&gt; {}, [value]) → on change</li>
        </ul>

        <pre className="bg-black text-cyan-400 p-2 rounded mt-2 overflow-x-auto">
          {`useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("API");
    const data = await res.json();
  };
  fetchData();
}, []);`}
        </pre>
      </div>

      {/* useRef */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">useRef</h2>
        <p>→ Stores value without re-render.</p>
        <p>→ Used for DOM access.</p>

        <pre className="bg-black text-cyan-400 p-2 rounded mt-2 overflow-x-auto">
          {`const inputRef = useRef();
inputRef.current.focus();`}
        </pre>
      </div>

      {/* useContext */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">useContext</h2>
        <p>→ Solves prop drilling.</p>

        <ul className="list-disc ml-5">
          <li>Create context</li>
          <li>Wrap with Provider</li>
          <li>Use with useContext</li>
        </ul>

        <pre className="bg-black text-cyan-400 p-2 rounded mt-2 overflow-x-auto">
          {`const AuthContext = createContext();

<AuthContext.Provider value={data}>
  <Child />
</AuthContext.Provider>

const value = useContext(AuthContext);`}
        </pre>
      </div>

      {/* Custom Hook */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Custom Hook</h2>
        <p>→ Reusable logic.</p>
        <p>→ Must start with "use".</p>

        <pre className="bg-black text-cyan-400 p-2 rounded mt-2 overflow-x-auto">
          {`const useFetch = (url) => {
  const [data, setData] = useState([]);
  return data;
};`}
        </pre>
      </div>

      {/* Comparison */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">HOC vs Custom Hook</h2>
        <ul className="list-disc ml-5">
          <li>Custom Hook → reuse logic</li>
          <li>HOC → wrap component</li>
        </ul>
        <p className="mt-2">Use hooks in most cases.</p>
      </div>

      {/* Bonus */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Bonus Quick Points</h2>
        <ul className="list-disc ml-5">
          <li>Counter → useState</li>
          <li>API → useEffect</li>
          <li>Focus → useRef</li>
          <li>Auth → useContext</li>
          <li>Reuse → Custom Hook</li>
          <li>Wrap → HOC</li>
        </ul>
      </div>
    </div>
  );
};

export default Assgn28;
