import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';


export default function ItemListContainer () {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/227853251_5790031731066871_5751086499830671706_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGBPlSCexoDsK4OZ10RgwQ1Q6NgFDUGo9BDo2AUNQaj0HfeQK07R2VCC53PMl263b4&_nc_ohc=Tp9iH1em-mEAX9Ac7QM&_nc_ht=scontent.feze11-1.fna&oh=3aaf5bc62b07c18520a7f5820168258a&oe=615B5F7A"
                // src= '../assets/logo.jpg'
                alt="First slide"
                
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/226735213_5708323952570983_1929392538190083403_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFuTyLuV8XoRJe5RAYe_mZY4EiEzbrsfgHgSITNuux-Afa-soh0MNUCwIrloq-rLdI&_nc_ohc=zkixLE7JO7AAX9i2dUa&_nc_ht=scontent.feze11-1.fna&oh=68ea809e694b8fc042502970875f9ecc&oe=61581EDF"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/216026619_5643588705711175_893285779057714475_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFtK6nNStKrm3CXUwnX3J1Py1v6HgL1Q_7LW_oeAvVD_jjsuWc6NGSjCQyBLvddKjE&_nc_ohc=XVQ4EMkHN3IAX9H15cG&_nc_ht=scontent.feze11-1.fna&oh=b9dbfb6ef6d9b861ed7c445abcd4b931&oe=6158BC92"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://scontent.feze11-1.fna.fbcdn.net/v/t1.6435-9/159590864_5022813581122027_6543854371203432511_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFpS5oggB78xHE14CZ2e7jHe4hOH_jiesh7iE4f-OJ6yJOVxvKls19W6GjlaqyWllU&_nc_ohc=kyMawaSFnxIAX_dLt8X&_nc_ht=scontent.feze11-1.fna&oh=5b03397e48d495729ecd1f2d244508d1&oe=615935EF"
                alt="Four slide"
                />

                <Carousel.Caption>
                <h3>Four slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>


    );
}