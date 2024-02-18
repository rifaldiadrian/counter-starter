import { useState } from "react";
// import classNames from "classnames"; //lib untuk css dengan pendekatan JS

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";
function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault() //mencegah default behavior submit ketika refresh browser
    
    if(!value){
      return alert('Data tidak boleh kosong!')
    }
    const addedTodos = [...todos, {
      title : value,
      count : 1
    }]
    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index,action) => {
    const newTodos = [...todos]; //untuk mengcopy array ke dalam variabel baru

    if(action === 'plus'){
      newTodos[index].count = newTodos[index].count + 1
    }else{
      if(newTodos[index].count > 0){
        newTodos[index].count = newTodos[index].count - 1
      }else{
        newTodos.splice(index,1) //Splice untuk menghapus data pada array (index,jumlah data yang dihapus)
      }
    }
    setTodos(newTodos);
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    },0)
    return totalCounts
  } 

  return (
    // React Fragment
    <>
      <Navbar />

      <Container>
        <SearchInput 
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />        

        <Info 
        todosLength={todos.length}
        totalCount={getTotalCounts()}
        onDelete={() => {setTodos([])}}
        />
          

          {todos.length > 0 ? (
            <Todos 
            todos={todos}
            onAddSubtraction={(index,action) => handleAdditionCount(index,action)}
            />
          ) :  (
            <Empty />
          )}
      </Container>
    </>
  );
}

export default App;
