import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { IRobot } from '../App'

const initialState = {
  robotData: [],
  searchText: '',
  setSearchText: () => null
}

interface IAppProps {
  children: JSX.Element;
}

interface IAppState {
  robotData: Array<IRobot>;
  searchText: string;
  setSearchText(text: string): void;
}

export const RobotContext = createContext<IAppState>(initialState);

const RobotContextProvider: React.SFC<IAppProps> = ({ children }) => {

    const [ robotData, setRobotData ] = useState<Array<IRobot>>([])
    const [ searchText, setSearchText ] = useState<string>('')

    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setRobotData(result.data);
    };

    useEffect(() => {
        fetchData();
      }, []);

    return ( 
        <RobotContext.Provider value={{ robotData, searchText, setSearchText }}>
            {children}
        </RobotContext.Provider>
     );
}
 
export default RobotContextProvider;