import { FormValuesType } from '@/app/types/form-value.type';
import { GHuntData } from '@/app/types/ghunt-data';

async function fetchGHuntData(data: FormValuesType, setGhuntData: React.Dispatch<React.SetStateAction<GHuntData>>){  // 関数コンポーネント(function)の外でHooksを呼び出せない制約がある
  try {  
    const response = await fetch('http://localhost:8000/verify-mail', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });            

    if (!response.ok) throw new Error();
    const responseData = await response.json();
    console.log(responseData);

    setGhuntData(responseData);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


export { fetchGHuntData };