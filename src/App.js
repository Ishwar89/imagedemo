import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-crop/dist/ReactCrop.css";
import ImageCropComponent from "./components/ImageCropComponent";


export default function App() {
   return(
       <div class="card" style={{marginTop:'100px',height:'500px',width:"600px",marginLeft:"480px",borderRadius: '30px', justifyContent: 'center',alignItems: 'center',backgroundColor: '#fcfcfc'}}>
       <ImageCropComponent/>
       </div>
   )};
