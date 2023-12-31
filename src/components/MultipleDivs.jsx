import '../styles/multipledivs.css'
function MultipleDivs() 
{       
        let img = {
            width : "80px",
            hight : "50px"
                }
    let movies = [
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        {movieName : "Incedious",Ratings : 10, image: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-130118/insidious.jpg"},
        ]

   return(
    <div>
    
        { movies.map((movie) => { return (
        <div id="moviepost">
               <div id="post1">
                <img src={movie.image} alt="img" style={img}/>
                <h3>Movie name :{movie.movieName} </h3>
                <h6> Ratings : + {movie.Ratings}</h6>   
                </div>
                     
        </div>
                                        )
                                }
                     )                             
        }
    </div>  
        )      
}

export default MultipleDivs;