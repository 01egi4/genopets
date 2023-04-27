import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [floor, setFloor] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      getStats();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStats = async () => {
    const data = await axios(
      `https://api-mainnet.magiceden.dev/v2/collections/degods/stats`
    ).then((res) => {
      console.log(res.data);
      setFloor(res.data.floorPrice);
    });
  };

  return (
    <div>degods:{floor}</div>
  )
}
