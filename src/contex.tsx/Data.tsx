import { createContext , useEffect ,useState } from "react";
type user = {
    id: number,
    name: string,
    username: string,
    email: number,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
  };
  interface UserContextProviderProps {
    children: React.ReactNode;
  }
  interface UserContextType {
    user: user[] | null;
    setUser: React.Dispatch<React.SetStateAction<user[] | null>>;
  
  }
  
  export const userContext = createContext<UserContextType | null>(null);
  
  export function DataCards(props: UserContextProviderProps) {
    const [user, setUser] = useState<user[] | null>(null);
    useEffect(() => {
      const data = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let jdata = await data.json();
        console.log(jdata);
        setUser(jdata);
      };
      data();
    }, []);
    return (
      <userContext.Provider value={{ user , setUser }}>
        {props.children}
      </userContext.Provider>
    );
  }
  