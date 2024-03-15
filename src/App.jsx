import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Navbar/>
     <h1>2023 Bursa Tarımının Türkiye Tarımı İçindeki Yeri</h1>
     
    
<table> 

    <tr> 

        <th>URUN ADI</th> 

        <th>BURSA URETIM ALANI DA</th> 

        <th>BURSA URETIM MIKTARI TON</th> 

        <th>TURKIYE URETIM MIKTARI TON</th> 

        <th>TURKIYE SIRALAMASI</th> 

        <th>TURKIYE URETIM YUZDESI</th> 

    </tr> 

    <tr> 

        <td>Ahududu</td> 

        <td>7,671</td> 

        <td>6,393</td> 

        <td>6,652</td> 

        <td>1</td> 

        <td>96,11</td> 

    </tr> 

    <tr> 

        <td>Böğürtlen</td> 

        <td>2,659</td> 

        <td>2,530</td> 

        <td>3,384</td> 

        <td>1</td> 

        <td>74,76</td> 

    </tr> 

    <tr> 

        <td>Maviyemiş</td> 

        <td>3,643</td> 

        <td>1,868</td> 

        <td>4,305</td> 

        <td>1</td> 

        <td>43,39</td> 

    </tr> 

    <tr> 

        <td>Armut</td> 

        <td>86,195</td> 

        <td>225,798</td> 

        <td>551,086</td> 

        <td>1</td> 

        <td>40,97</td> 

    </tr> 

    <tr> 

        <td>Muşmula</td> 

        <td>1,295</td> 

        <td>1,004</td> 

        <td>5,278</td> 

        <td>1</td> 

        <td>19,02</td> 

    </tr> 

    <tr> 

        <td>Sofralık Zeytinler</td> 

        <td>440,110</td> 

        <td>187,692</td> 

        <td>938,217</td> 

        <td>2</td> 

        <td>20,01</td> 

    </tr> 

    <tr> 

        <td>Kivi</td> 

        <td>7,544</td> 

        <td>14,243</td> 

        <td>13,750</td> 

        <td>2</td> 

        <td>14,13</td> 

    </tr> 

    <tr> 

        <td>Kiraz</td> 

        <td>56,554</td> 

        <td>54,485</td> 

        <td>656,041</td> 

        <td>2</td> 

        <td>8,31</td> 

    </tr> 

    <tr> 

        <td>Erik</td> 

        <td>22,802</td> 

        <td>27,701</td> 

        <td>348,750</td> 

        <td>2</td> 

        <td>7,94</td> 

    </tr> 

    <tr> 

        <td>Ayva</td> 

        <td>7,059</td> 

        <td>15,118</td> 

        <td>197,503</td> 

        <td>2</td> 

        <td>7,65</td> 

    </tr> 

    <tr> 

        <td>Ceviz</td> 

        <td>91,062</td> 

        <td>16,111</td> 

        <td>335,000</td> 

        <td>2</td> 

        <td>4,81</td> 

    </tr> 

    <tr> 

        <td>Nektarin</td> 

        <td>27,253</td> 

        <td>45,340</td> 

        <td>204,671</td> 

        <td>3</td> 

        <td>22,15</td> 

    </tr> 

    <tr> 

        <td>Şeftali</td> 

        <td>60,677</td> 

        <td>105,586</td> 

        <td>803,514</td> 

        <td>3</td> 

        <td>13,14</td> 

    </tr> 

    <tr> 

        <td>İncir</td> 

        <td>29,983</td> 

        <td>27,976</td> 

        <td>350,000</td> 

        <td>3</td> 

        <td>7,99</td> 

    </tr> 

    <tr> 

        <td>Elma (Golden)</td> 

        <td>5,427</td> 

        <td>14,434</td> 

        <td>208,078</td> 

        <td>4</td> 

        <td>6,94</td> 

    </tr> 

    <tr> 

        <td>Kişniş (İşlenmemiş)</td> 

        <td>4</td> 

        <td>1</td> 

        <td>204</td> 

        <td>4</td> 

        <td>0,49</td> 

    </tr> 

    <tr> 

        <td>Çilek</td> 

        <td>28,121</td> 

        <td>48,093</td> 

        <td>728,112</td> 

        <td>5</td> 

        <td>6,61</td> 

    </tr> 

    <tr> 

        <td>Biber kuru işlenmemiş</td> 

        <td>4,250</td> 

        <td>11,900</td> 

        <td>273,846</td> 

        <td>5</td> 

        <td>4,35</td> 

    </tr> 

    <tr> 

        <td>Lahana (Brüksel)</td> 

        <td>896</td> 

        <td>1,914</td> 

        <td>2,183</td> 

        <td>1</td> 

        <td>87,67</td> 

    </tr> 

    <tr> 

        <td>Kudret Narı</td> 

        <td>40</td> 

        <td>40</td> 

        <td>84</td> 

        <td>1</td> 

        <td>47,62</td> 

    </tr> 

    <tr> 

        <td>Bezelye (Taze)</td> 

        <td>44,674</td> 

        <td>42,201</td> 

        <td>120,455</td> 

        <td>1</td> 

        <td>35,03</td> 

    </tr> 

    <tr> 

        <td>Domates (Salçalık)</td> 

        <td>135,462</td> 

        <td>1,265,206</td> 

        <td>5,045,144</td> 

        <td>1</td> 

        <td>25,00</td> 

    </tr> 

    <tr> 

        <td>Fasülye (Taze)</td> 

        <td>38,339</td> 

        <td>67,849</td> 

        <td>519,713</td> 

        <td>1</td> 

        <td>13,05</td> 

    </tr> 

    <tr> 

        <td>Barbunya (Taze)</td> 

        <td>3,546</td> 

        <td>5,168</td> 

        <td>45,717</td> 

        <td>2</td> 

        <td>11,30</td> 

    </tr> 

    <tr> 

        <td>Enginar</td> 

        <td>5,845</td> 

        <td>7,457</td> 

        <td>40,815</td> 

        <td>3</td> 

        <td>18,27</td> 

    </tr> 

    <tr> 

        <td>Kereviz (Kök)</td> 

        <td>1,651</td> 

        <td>3,281</td> 

        <td>25,818</td> 

        <td>3</td> 

        <td>12,70</td> 

    </tr> 

    <tr> 

        <td>Ispanak</td> 

        <td>10,865</td> 

        <td>15,527</td> 

        <td>230,071</td> 

        <td>3</td> 

        <td>6,75</td> 

    </tr> 

    <tr> 

        <td>Biber (Sivri)</td> 

        <td>21,572</td> 

        <td>64,318</td> 

        <td>979,180</td> 

        <td>3</td> 

        <td>6,60</td> 

    </tr> 

    <tr> 

        <td>Semizotu</td> 

        <td>257</td> 

        <td>658</td> 

        <td>12,205</td> 

        <td>3</td> 

        <td>5,40</td> 

    </tr> 

    <tr> 

        <td>Lahana (Beyaz)</td> 

        <td>6,794</td> 

        <td>27,008</td> 

        <td>666,959</td> 

        <td>3</td> 

        <td>4,05</td> 

    </tr> 

    <tr> 

        <td>Brokoli</td> 

        <td>4,859</td> 

        <td>9,288</td> 

        <td>106,792</td> 

        <td>4</td> 

        <td>8,70</td> 

    </tr> 

    <tr> 

        <td>Pepino</td> 

        <td>2</td> 

        <td>9</td> 

        <td>125</td> 

        <td>4</td> 

        <td>7,20</td> 

    </tr> 

    <tr> 

        <td>Karpuz</td> 

        <td>33,800</td> 

        <td>189,460</td> 

        <td>3,394,783</td> 

        <td>4</td> 

        <td>5,60</td> 

    </tr> 

    <tr> 

        <td>Kabak (Sakız)</td> 

        <td>5,967</td> 

        <td>24,903</td> 

        <td>590,362</td> 

        <td>4</td> 

        <td>4,22</td> 

    </tr> 

    <tr> 

        <td>Karnabahar</td> 

        <td>6,339</td> 

        <td>15,592</td> 

        <td>239,857</td> 

        <td>5</td> 

        <td>6,50</td> 

    </tr> 

    <tr> 

        <td>Dereotu</td> 

        <td>417</td> 

        <td>575</td> 

        <td>10,229</td> 

        <td>5</td> 

        <td>5,62</td> 

    </tr> 

    <tr> 

        <td>Lahana (Kırmızı)</td> 

        <td>2,886</td> 

        <td>8,932</td> 

        <td>238,363</td> 

        <td>5</td> 

        <td>3,74</td> 

    </tr> 

    <tr> 

        <td>Üçgül (Yeşil Ot)</td> 

        <td>60</td> 

        <td>105</td> 

        <td>117</td> 

        <td>1</td> 

        <td>89,74</td> 

    </tr> 

    <tr> 

        <td>Bezelye (Kuru)</td> 

        <td>2,442</td> 

        <td>563</td> 

        <td>2,392</td> 

        <td>2</td> 

        <td>23,53</td> 

    </tr> 

    <tr> 

        <td>İtalyan Çimi(Yemlik)</td> 

        <td>52,160</td> 

        <td>320,897</td> 

        <td>2,122,105</td> 

        <td>4</td> 

        <td>15,12</td> 

    </tr> 

    <tr> 

        <td>Bakla (Kuru,İnsan Tüketimi İçin)</td> 

        <td>1,760</td> 

        <td>414</td> 

        <td>4,234</td> 

        <td>4</td> 

        <td>9,77</td> 

    </tr> 

    <tr> 

        <td>Salep</td> 

        <td>13</td> 

        <td>5</td> 

        <td>117</td> 

        <td>4</td> 

        <td>4,27</td> 

    </tr> 

    <tr> 

        <td>Sorgum (Yeşil Ot)</td> 

        <td>2,282</td> 

        <td>8,236</td> 

        <td>117,076</td> 

        <td>5</td> 

        <td>7,03</td> 

    </tr> 

    <tr> 

        <td>Yem Şalgamı</td> 

        <td>3,735</td> 

        <td>16,225</td> 

        <td>268,890</td> 

        <td>5</td> 

        <td>6,03</td> 

    </tr> 

    <tr> 

        <td>Buğday (Hasıl/Yeşilot)</td> 

        <td>12,058</td> 

        <td>17,962</td> 

        <td>310,966</td> 

        <td>5</td> 

        <td>5,77</td> 

    </tr> 

    <tr> 

        <td>Mısır (Slaj)</td> 

        <td>226,020</td> 

        <td>1,299,827</td> 

        <td>28,558,983</td> 

        <td>5</td> 

        <td>4,55</td> 

    </tr> 

    <tr> 

        <td>Bakla (Kuru,Yemlik)</td> 

        <td>207</td> 

        <td>82</td> 

        <td>2,452</td> 

        <td>5</td> 

        <td>3,34</td> 

    </tr> 

</table> 


 
      
  






    </>
  )
}

export default App
