import { dataDS } from "../assets/Constants";

const getData = async (module) => {
   try {
    let array=[]
      const data = dataDS['Module '+module];
      console.log(data);
      for(let i in data){
        array.push(data[i]['name'])
      }
      return array;
   } catch (error) {
      console.error(error);
   }
};

export { getData };
