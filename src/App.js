import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from './redux/Action/Action';

function App() {
  const products = useSelector((state)=>(state.product));
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getdata())
  })
  
  return (
    <div className="App">
      <header className="App-header">
      {products.map((product)=> {
                    return (
                      <div key={product.id}>
                    <ul >
                        <li>{product.id}</li>
                        <li>{product.title}</li>
                        <li>{product.namee}</li>
                        <li>{product.createdAt}</li>
                        <li>{product.imageUrl}</li>
                        <li>{product.body}</li>
                    </ul>
                    </div>
                    )
                }) }
        
      </header>
    </div>
  );
}


export default App;
