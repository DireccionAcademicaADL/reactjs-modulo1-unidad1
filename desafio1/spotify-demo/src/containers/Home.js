import React from 'react';
import HorizontalList from '.././components/HorizontalList';

const listOne = [
    {id: 1, img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/448319b4b1b43f8324abc31cee74b401_screen.jpg?ts=1561422679"},
    {id: 2, img: "https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"},
    {id: 3, img: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/17171216/Top100Covers_Kavinsky-Outrun.jpg"},
    {id: 4, img: "https://doomwiki.org/w/images/9/99/Doom_music_cover.png"},
    {id: 5, img: "https://f4.bcbits.com/img/a3693761582_10.jpg"}

];

const listTwo = [
    {id: 6, img: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e2f9aa74-7587-4a30-b0c0-4df61d7ac308/43.jpg"}, 
    {id: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqKaaYhuLpX4u0QT0iawy_Xa2Ua3k8qrIRnH-Fv5jhNAy5zpHe"},
    {id: 8, img: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/46457/optimized_large_thumb_stage.jpg"},
    {id: 9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1Hx-1BE185Bx4GXBSDrSgFuUv4_7KjHX7Uludc1PYTqRuGGSV"},
    {id: 10, img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/video-album-cover-template-with-logo-design-f182bfb7831bf2edc9abe7abe3af3564.jpg?ts=1567081314"}

]
   
const listThree = [
    {id: 11, img: "https://blog.creativelive.com/wp-content/uploads/2015/04/RebeccaKing_RenegadeChihuahuaDesign_AlbumArt-6.jpg"},
    {id: 12, img: "https://img.discogs.com/tXPB4aKhkhXRDRYZ6gDdvp_xZgQ=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2176288-1382211097-7232.jpeg.jpg"},
    {id: 13, img: "https://img.discogs.com/7OHbGlfqV9mA-oTUm6fE-a9R6ak=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2183020-1414789124-7059.jpeg.jpg"}, 
    {id: 14, img: "https://www.vanndigital.com/wp-content/uploads/d-v--alias-khryst-music-album-thumbnail.jpg"},
    {id: 15, img: "https://i.pinimg.com/736x/55/f1/d1/55f1d13c34071514d7ccae1c73c3e8a5.jpg"}
]
    
const listFour = [
    {id: 16, img: "https://www.designwizard.com/wp-content/uploads/2019/09/3-Design-Wizard-Album-Cover.jpg"},
    {id: 17, img: "https://mms.businesswire.com/media/20191004005085/en/747855/5/JOKER_Sdtk_Cover_02_3000px_RGB_300dpi.jpg"},
    {id: 18, img: "https://www.designbold.com/academy/wp-content/uploads/2018/08/Top-9-Ideas-You-Can-Put-in-Your-Next-Album-Cover-2.png"},
    {id: 19, img: "https://i.pinimg.com/originals/9e/0a/24/9e0a246c2ac8658e53429d2543e8f859.png"}
    ];

class Home extends React.Component {

    state= {
        isClicked: false
    }

    handleOpacity= () => {
        setTimeout(() => {
        this.setState({isClicked: !this.state.isClicked});
    }, 3000, this.setState({isClicked: !this.state.isClicked})
    );
        

        
    }

    render(){

        return(
            <div style={{opacity: this.state.isClicked ? 0.2 : 1}}>
                <HorizontalList action={this.handleOpacity} albums={listOne} title="Escuchado recientemente" />
                <HorizontalList action={this.handleOpacity} albums={listTwo} title="Mis favoritos" />
                <HorizontalList action={this.handleOpacity} albums={listThree} title="Lo nuevo" />
                <HorizontalList action={this.handleOpacity} albums={listFour} title="De colección" />
            </div>
        );
    }
}

export default Home;