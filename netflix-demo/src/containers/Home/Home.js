import React from 'react';
import FeaturedButton from '../../components/FeaturedButton/FeaturedButton';
import FeaturedMovieImage from '../../components/FeaturedMovieImage/FeaturedMovieImage';
import MoviesList from '../../components/MoviesList/MoviesList';
import logo from '../.././logo.svg';
import { getInnerWidth } from '../../utils/Utils';

const moviesList = [
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/The_Angry_Birds_Movie_poster.png/220px-The_Angry_Birds_Movie_poster.png", title: "Angry Birds", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg", title: "Joker", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png", title: "Dolittle", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Movie_poster_for_%22Scary_Movie%22.jpg/220px-Movie_poster_for_%22Scary_Movie%22.jpg", title: "Scary Movie", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hustlers_%28Official_Film_Poster%29.png", title: "Hustlers", author: "Tarantino", cols: 1 }
  ];

  const moviesMoreList = [
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Giver_poster.jpg/220px-The_Giver_poster.jpg", title: "Giver", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/A_Beautiful_Mind_Poster.jpg/220px-A_Beautiful_Mind_Poster.jpg", title: "BeautifulMind", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Collateral_%28Movie%29.jpg/220px-Collateral_%28Movie%29.jpg", title: "Colateral dmg", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Dark_Phoenix_%28film%29.png/220px-Dark_Phoenix_%28film%29.png", title: "Dark Phoenix", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Lara_Croft_film.jpg/220px-Lara_Croft_film.jpg", title: "Tomb Raider", author: "Tarantino", cols: 1 }
  ];

  const moviesNextList = [
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Giver_poster.jpg/220px-The_Giver_poster.jpg", title: "Giver", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/A_Beautiful_Mind_Poster.jpg/220px-A_Beautiful_Mind_Poster.jpg", title: "BeautifulMind", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Collateral_%28Movie%29.jpg/220px-Collateral_%28Movie%29.jpg", title: "Colateral dmg", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Dark_Phoenix_%28film%29.png/220px-Dark_Phoenix_%28film%29.png", title: "Dark Phoenix", author: "Tarantino", cols: 1 },
    { img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Lara_Croft_film.jpg/220px-Lara_Croft_film.jpg", title: "Tomb Raider", author: "Tarantino", cols: 1 }
  ];

class Home extends React.Component {

    state= {
        opacity: 1,
        isReproducing: false,
        isShowMiLista: false, 
        windowWidth: getInnerWidth()
    }

    handleResize = () => {
        this.setState({windowWidth: window.innerWidth});
      };

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
    }

    handleReproducir = () => {
        this.setState({
            opacity: !this.state.isReproducing ? 0.2 : 1,
            isReproducing: !this.state.isReproducing
        });
    };

    showLoadImage(){
        return <img 
        width={this.state.windowWidth ? "50px" : "100px"}  
        height="100px" 
        style={{position: "absolute", top: this.state.windowWidth > 768 ? "5%" : "20%", left: "50%"}} 
        src={logo} 
        className="App-logo" 
        alt="logo" />;
    }

    handleMasMiLista = () => {
        this.setState({
            isShowMiLista: !this.state.isShowMiLista
        })
    }

    render(){
        return(
        <div>
        <header>
            <FeaturedMovieImage 
            opacity={this.state.opacity} 
            image="https://thecouch.world/wp-content/uploads/2017/12/batman-the-dark-knight-movie-hd-wallpaper-2560x1600-3857conv.jpg" 
            innerWidth={this.state.innerWidth}
            />

            {this.state.isReproducing && this.showLoadImage()}
            
            <FeaturedButton 
            action={this.handleReproducir} 
            title={!this.state.isReproducing ? "Reproducir" : "Cancelar"} 
            txtColor="white" 
            bckColor="red" 
            left={this.state.windowWidth < 768 ? "5%" : "10%"}
            bottom={this.state.windowWidth < 768 ? "70%" : "20%"}
            />
            <FeaturedButton 
            action={this.handleMasMiLista} 
            title={!this.state.isShowMiLista ? "+ Mi Lista" : "Cancelar"}
            txtColor="black" 
            bckColor="grey" 
            left={this.state.windowWidth < 768 ? "40%" : "25%"}
            bottom={this.state.windowWidth < 768 ? "70%" : "20%"}
            />
        </header>
        
            <MoviesList 
            movies={!this.state.isShowMiLista ? moviesList : moviesMoreList} 
            >
            Nuevos Estrenos
            </MoviesList>

            <MoviesList 
            movies={moviesNextList} 
            >
            Próximamente
            </MoviesList>
        </div>
        );
    }
}

export default Home;