import Children from './components/Children'

function App() {
  const handleChangeNum = (num) => {
    console.log(num)
  }
  const html =
    <>
      <p>hello react</p>
      <Children str={123} changeNum={handleChangeNum}><button>click</button></Children>
    </>
  return html
}

export default App;
