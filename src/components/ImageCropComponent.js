import {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import ReactCrop from "react-image-crop";

const ImageCropComponent=()=>{
    const [srcImg, setSrcImg] = useState(null);
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({aspect: 16 / 9});
    const [result, setResult] = useState(null);
    const[final,setFinal]=useState(true);

    const handleImage = async (event) => {
        setSrcImg(URL.createObjectURL(event.target.files[0]));
    };

    const getCroppedImg = async () => {
        try {
            const canvas = document.createElement("canvas");
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );
            const base64Image = canvas.toDataURL("image/jpeg", 1);
            setResult(base64Image);
            setFinal(false)
            console.log(result);
        } catch (e) {
            console.log("crop the image");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("Image Cropped successfully")
    }

    return (
        <Container className="container" fluid="md" style={{marginLeft:150,marginBottom:"100px",}}>
            <h5 className="header">Image Crop Demo</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Please select photo you want to crop</Form.Label>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                        />
                    </div>
                    {final ?
                        <div>
                            <div>
                                    {srcImg && (
                                        <div>
                                            <div>
                                            <ReactCrop
                                                style={{maxWidth: "50%",}}
                                                src={srcImg}
                                                onImageLoaded={setImage}
                                                crop={crop}
                                                onChange={setCrop}
                                            />
                                            <Button className="cropButton" onClick={getCroppedImg}
                                            >
                                                crop
                                            </Button>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    :
                       <div>
                           {result && (
                            <div>
                                <img src={result} alt="cropped image"/>
                            </div>
                            )}
                       </div>
                   }
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ImageCropComponent;