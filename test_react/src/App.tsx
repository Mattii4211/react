import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'
import Form from './components/Form';
import { Test } from './components/TestGeneric';

const people = [
  {
    id: crypto.randomUUID(),
    name: 'Test1',
    tel: "12344",
    email: "test1@test.com"
  },
  {
    id: crypto.randomUUID(),
    name: 'Test2',
    tel: "12344",
    email: "test2@test.com"
  }
];

interface MySocial {
  id: number;
  name: string;
  link: string;
}

const socials: MySocial[] = [
  { id: 11, name: 'WebSite', link: 'fabiobiondi.dev'},
  { id: 12, name: 'Youtube', link: 'YT'},
  { id: 13, name: 'Twitch', link: 'twitch'},
]

// async function sendRequest(url: string, method: string, data: any) {
//   let response = null;

//   try {
//     response = await fetch(url, {
//       method: method,
//       body: JSON.stringify(data)
//     })
//   } catch (error) {
    
//   }

//   return response;
// }

function App() {
  const [peopleData, setPeopleData] = useState(people);
  const [selectedSocial, setSelectedSocial] = useState<MySocial>(socials[0])

  const selectHandler = (item: MySocial, selectedIndex: number) => {
    setSelectedSocial(item)
  }
  
  const formSubmit = (data: any) => {
    setPeopleData([...peopleData, data]);
  };

  const editFormSubmit = (data: any) => {
    setPeopleData(
      peopleData.map(
        (item) => {
          if (item.id === data.id) {
            item = data;
          }
          return item;
        }
      )
    );
  };

  return (
    <>
    <div className="container">
      <div>
        <h1>Tabbar Demo</h1>
          <Test<MySocial>
            selectedItem={selectedSocial}
            items={socials}
            someFunction={selectHandler}
          />

        <div className="border border-slate-200 border-solid rounded my-3 p-5">
          <a href={selectedSocial.link}>Visit {selectedSocial.name}</a>
        </div>
      </div>
      {
        peopleData.map((el) => {
          return (
            <
              UserInfo
                key={el.id}
                id={el.id}
                name={el.name}
                tel={el.tel}
                email={el.email}
                onFormSubmit={editFormSubmit}
            />
          )
        })
      }
      < Form onFormSubmit={formSubmit} />
    </div>
    </>
  )
}

export default App
