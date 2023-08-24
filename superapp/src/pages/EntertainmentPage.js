import React, {useEffect} from "react";
import Profile from "../images/profile_icon.png";
import { Link } from "react-router-dom";

function EntertainmentPage() {

    useEffect(()=>{
        let categoryHandler = () => {
            let action = JSON.parse(localStorage.getItem("action"))
            let drama = JSON.parse(localStorage.getItem("drama"))
            let romance = JSON.parse(localStorage.getItem("romance"))
            let thriller= JSON.parse(localStorage.getItem("thriller"))
            let western = JSON.parse(localStorage.getItem("western"))
            let horror = JSON.parse(localStorage.getItem("horror"))
            let fantasy = JSON.parse(localStorage.getItem("fantasy"))
            let music = JSON.parse(localStorage.getItem("music"))
            let fiction = JSON.parse(localStorage.getItem("fiction"))
            
             if(action){
               document.getElementById('action-line').classList.add('no-display')
             }
             else{
                document.getElementById('action-line').classList.remove('no-display')
             }

             if(drama){
                document.getElementById('drama-line').classList.add('no-display')
             }
             else{
                 document.getElementById('drama-line').classList.remove('no-display')
             }

             if(romance){
                document.getElementById('romance-line').classList.add('no-display')
             }
             else{
                 document.getElementById('romance-line').classList.remove('no-display')
             }

             if(thriller){
                document.getElementById('thriller-line').classList.add('no-display')
             }
             else{
                 document.getElementById('thriller-line').classList.remove('no-display')
             }
             if(western){
                document.getElementById('western-line').classList.add('no-display')
             }
             else{
                 document.getElementById('western-line').classList.remove('no-display')
             }

             if(horror){
                document.getElementById('horror-line').classList.add('no-display')
             }
             else{
                 document.getElementById('horror-line').classList.remove('no-display')
             }

             if(fantasy){
                document.getElementById('fantasy-line').classList.add('no-display')
             }
             else{
                 document.getElementById('fantasy-line').classList.remove('no-display')
             }

             if(music){
                document.getElementById('music-line').classList.add('no-display')
             }
             else{
                 document.getElementById('music-line').classList.remove('no-display')
             }

             if(fiction){
                document.getElementById('fiction-line').classList.add('no-display')
             }
             else{
                 document.getElementById('fiction-line').classList.remove('no-display')
             }
          }
          categoryHandler();

               // Action Movies Fetch
          async function fetchAction() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Action&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
  
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie1 =  result.results[0].primaryImage.url
               let movie2 =  result.results[1].primaryImage.url
               let movie3 =  result.results[2].primaryImage.url
               let movie4 =  result.results[3].primaryImage.url
               let movie5 =  result.results[4].primaryImage.url
               let movie6 =  result.results[5].primaryImage.url
               document.getElementById("movie1").src = movie1
               document.getElementById("movie2").src = movie2
               document.getElementById("movie3").src = movie3
               document.getElementById("movie4").src = movie4
               document.getElementById("movie5").src = movie5
               document.getElementById("movie6").src = movie6
            } catch (error) {
                console.log(error);
            }
        }
  
        fetchAction();

        // Drama Movies Fetch
        async function fetchDrama() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Drama&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie7 =  result.results[0].primaryImage.url
               let movie8 =  result.results[1].primaryImage.url
               let movie9 =  result.results[2].primaryImage.url
               let movie10 =  result.results[3].primaryImage.url
               let movie11 =  result.results[4].primaryImage.url
               let movie12 =  result.results[5].primaryImage.url
               document.getElementById("movie7").src = movie7
               document.getElementById("movie8").src = movie8
               document.getElementById("movie9").src = movie9
               document.getElementById("movie10").src = movie10
               document.getElementById("movie11").src = movie11
               document.getElementById("movie12").src = movie12
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchDrama();
        // Romance Movies Fetch
        async function fetchRomance() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Romance&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie13 =  result.results[0].primaryImage.url
               let movie14 =  result.results[1].primaryImage.url
               let movie15 =  result.results[2].primaryImage.url
               let movie16 =  result.results[3].primaryImage.url
               let movie17 =  result.results[4].primaryImage.url
               let movie18 =  result.results[5].primaryImage.url
               document.getElementById("movie13").src = movie13
               document.getElementById("movie14").src = movie14
               document.getElementById("movie15").src = movie15
               document.getElementById("movie16").src = movie16
               document.getElementById("movie17").src = movie17
               document.getElementById("movie18").src = movie18
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchRomance();

        // Thriller Movie Fetch
        async function fetchThriller() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Thriller&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie19 =  result.results[0].primaryImage.url
               let movie20 =  result.results[1].primaryImage.url
               let movie21 =  result.results[2].primaryImage.url
               let movie22 =  result.results[3].primaryImage.url
               let movie23 =  result.results[4].primaryImage.url
               let movie24 =  result.results[5].primaryImage.url
               document.getElementById("movie19").src = movie19
               document.getElementById("movie20").src = movie20
               document.getElementById("movie21").src = movie21
               document.getElementById("movie22").src = movie22
               document.getElementById("movie23").src = movie23
               document.getElementById("movie24").src = movie24
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchThriller();


        // Western Movie Fetch
        async function fetchWestern() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Western&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie25 =  result.results[0].primaryImage.url
               let movie26 =  result.results[1].primaryImage.url
               let movie27 =  result.results[2].primaryImage.url
               let movie28 =  result.results[3].primaryImage.url
               let movie29 =  result.results[4].primaryImage.url
               let movie30 =  result.results[5].primaryImage.url
               document.getElementById("movie25").src = movie25
               document.getElementById("movie26").src = movie26
               document.getElementById("movie27").src = movie27
               document.getElementById("movie28").src = movie28
               document.getElementById("movie29").src = movie29
               document.getElementById("movie30").src = movie30
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchWestern();

         // Horror Movie Fetch
        async function fetchHorror() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Horror&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie31 =  result.results[0].primaryImage.url
               let movie32 =  result.results[1].primaryImage.url
               let movie33 =  result.results[2].primaryImage.url
               let movie34 =  result.results[3].primaryImage.url
               let movie35 =  result.results[4].primaryImage.url
               let movie36 =  result.results[5].primaryImage.url
               document.getElementById("movie31").src = movie31
               document.getElementById("movie32").src = movie32
               document.getElementById("movie33").src = movie33
               document.getElementById("movie34").src = movie34
               document.getElementById("movie35").src = movie35
               document.getElementById("movie36").src = movie36
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchHorror();
        // Fantasy Movie Fetch
        async function fetchFantasy() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Fantasy&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie37 =  result.results[0].primaryImage.url
               let movie38 =  result.results[1].primaryImage.url
               let movie39 =  result.results[2].primaryImage.url
               let movie40 =  result.results[3].primaryImage.url
               let movie41 =  result.results[4].primaryImage.url
               let movie42 =  result.results[5].primaryImage.url
               document.getElementById("movie37").src = movie37
               document.getElementById("movie38").src = movie38
               document.getElementById("movie39").src = movie39
               document.getElementById("movie40").src = movie40
               document.getElementById("movie41").src = movie41
               document.getElementById("movie42").src = movie42
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchFantasy();

        // Music Movie Fetch
        async function fetchMusic() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Music&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie43 =  result.results[0].primaryImage.url
               let movie44 =  result.results[1].primaryImage.url
               let movie45 =  result.results[2].primaryImage.url
               let movie46 =  result.results[3].primaryImage.url
               let movie47 =  result.results[4].primaryImage.url
               let movie48 =  result.results[5].primaryImage.url
               document.getElementById("movie43").src = movie43
               document.getElementById("movie44").src = movie44
               document.getElementById("movie45").src = movie45
               document.getElementById("movie46").src = movie46
               document.getElementById("movie47").src = movie47
               document.getElementById("movie48").src = movie48
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchMusic();

        // Fiction Movie Fetch
        async function fetchFiction() {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2015&genre=Mystery&limit=20&endYear=2025&list=most_pop_movies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9cadb1bce4mshf05307f8e00be1ap1a6c1ejsn26582e460cf0',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
               let movie49 =  result.results[0].primaryImage.url
               let movie50 =  result.results[1].primaryImage.url
               let movie51 =  result.results[2].primaryImage.url
               let movie52 =  result.results[3].primaryImage.url
               let movie53 =  result.results[4].primaryImage.url
               let movie54 =  result.results[5].primaryImage.url
               document.getElementById("movie49").src = movie49
               document.getElementById("movie50").src = movie50
               document.getElementById("movie51").src = movie51
               document.getElementById("movie52").src = movie52
               document.getElementById("movie53").src = movie53
               document.getElementById("movie54").src = movie54
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchFiction();
    })

   

  

 
  
  return (
    <div className="entertainment">
      <div className="superapp_profile">
        <div className="superapp">Super app</div>
        <div className="profile">
          <img src={Profile} alt="" />
        </div>
      </div>
      <img id="movie-img" src="" alt="" />
      <div className="entertainment-header">
        Entertainment according to your choice
      </div>
      <div className="moviescontainer">
            <div className="action" id="action-line">
                <p>Action</p>
                <div className="img-container">
                    <img src="" alt="" id="movie1" />
                    <img src="" alt="" id="movie2" />
                    <img src="" alt="" id="movie3" />
                    <img src="" alt="" id="movie4" /> 
                    <img src="" alt="" id="movie5" /> 
                    <img src="" alt="" id="movie6" /> 
                </div>
            </div>
            <div className="drama" id="drama-line">
                <p>Drama</p>
                <div className="img-container">
                    <img src="" alt="" id="movie7" />
                    <img src="" alt="" id="movie8" />   
                    <img src="" alt="" id="movie9" />
                    <img src="" alt="" id="movie10" />
                    <img src="" alt="" id="movie11" />
                    <img src="" alt="" id="movie12" />  
                    
                </div>
            </div>
            <div className="romance" id="romance-line">
                <p>Romance</p>
                <div className="img-container">
                    <img src="" alt="" id="movie13" />
                    <img src="" alt="" id="movie14" />
                    <img src="" alt="" id="movie15" />
                    <img src="" alt="" id="movie16" />
                    <img src="" alt="" id="movie17" />
                    <img src="" alt="" id="movie18" />   
                </div>
            </div>
            <div className="thriller" id="thriller-line">
                <p>Thriller</p>
                <div className="img-container">
                    <img src="" alt="" id="movie19" />
                    <img src="" alt="" id="movie20" />  
                    <img src="" alt="" id="movie21" />
                    <img src="" alt="" id="movie22" />
                    <img src="" alt="" id="movie23" />
                    <img src="" alt="" id="movie24" />   
                </div>
            </div>
            <div className="western" id="western-line">
                <p>Western</p>
                <div className="img-container">
                    <img src="" alt="" id="movie25" />
                    <img src="" alt="" id="movie26" />
                    <img src="" alt="" id="movie27" />
                    <img src="" alt="" id="movie28" />  
                    <img src="" alt="" id="movie29" />
                    <img src="" alt="" id="movie30" />
                    
                </div>  
            </div>
            <div className="horror" id="horror-line">
                <p>Horror</p>
                <div className="img-container">
                    <img src="" alt="" id="movie31" />
                    <img src="" alt="" id="movie32" /> 
                    <img src="" alt="" id="movie33" />
                    <img src="" alt="" id="movie34" />
                    <img src="" alt="" id="movie35" />
                    <img src="" alt="" id="movie36" /> 
                </div>
            </div>
            <div className="fantasy" id="fantasy-line">
                <p>Fantasy</p>
                <div className="img-container">
                    <img src="" alt="" id="movie37" /> 
                    <img src="" alt="" id="movie38" /> 
                    <img src="" alt="" id="movie39" /> 
                    <img src="" alt="" id="movie40" /> 
                    <img src="" alt="" id="movie41" />
                    <img src="" alt="" id="movie42" />
                </div>
            </div>
            <div className="music" id="music-line">
                <p>Music</p>
                <div className="img-container">
                    <img src="" alt="" id="movie43" />
                    <img src="" alt="" id="movie44" />
                    <img src="" alt="" id="movie45" />
                    <img src="" alt="" id="movie46" />
                    <img src="" alt="" id="movie47" />
                    <img src="" alt="" id="movie48" />
                      
                </div>
            </div>
            <div className="fiction" id="fiction-line">
                <p>Fiction</p>
                <div className="img-container">
                    <img src="" alt="" id="movie49" />
                    <img src="" alt="" id="movie50" />
                    <img src="" alt="" id="movie51" />
                    <img src="" alt="" id="movie52" />
                    <img src="" alt="" id="movie53" />
                    <img src="" alt="" id="movie54" />                     
                </div>
            </div>
      </div>
      <Link className="back-home" to={"/Category/*"}>Browse</Link>
    </div>
  );
}

export default EntertainmentPage;
