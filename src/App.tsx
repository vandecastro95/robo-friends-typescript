import React, {useState, useEffect, useContext } from 'react';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import ErrorBoundary from './components/ErrorBoundary';
import { RobotContext } from './contexts/RobotContexts'
import 'tachyons'
import './App.css'

interface IAppProps {};

export interface IRobot {
  name: string;
  username: string;
  email: string;
  id: number
}

const App: React.SFC<IAppProps> = () => {
  

  const { robotData, setSearchText, searchText } = useContext(RobotContext)

  const onSearch = (event: string) => {
    setSearchText(event)
  }

  return (
    <div className="tc">
    <h1 className='f1'>RoboFriends</h1>
      <SearchBox 
        onSearch={onSearch}
      />
      <Scroll>
        <ErrorBoundary>
          {robotData.length === 0 ? <h1>Loading...</h1> : 
              <CardList 
              data={
                robotData.filter((robot: IRobot) => 
                robot.name.toLowerCase().includes(searchText.toLowerCase()) || 
                robot.username.toLowerCase().includes(searchText.toLowerCase()) || 
                robot.email.toLowerCase().includes(searchText.toLowerCase()))
              }
            />
          }
        </ErrorBoundary> 
      </Scroll>
    </div>
  );
}

export default App;
