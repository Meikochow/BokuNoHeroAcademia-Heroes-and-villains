import { GET_HEROES, GET_VILAINS } from '../actions/types'; 

const initialState = {
    heroes :[
        {
        name :"Toshinori Yagi",
        alias:"All Might",
        quirk:"Quirkless (Originally & Currently) One For All (Formerly)",
        dob  :"June 10",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest?cb=20160116011411"
      },
      {
          name :"Shota Aizawa",
          alias:"Eraser Head",
          quirk:"Erasure",
          dob  :"November 8",
          image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/a/ad/Shota_Aizawa_Full_Body_Normal_Suit.png/revision/latest?cb=20160521035900"
      },
      {
          name :"Enji Todoroki",
          alias:"Flame Hero: Endeavor",
          quirk:"Hellflame",
          dob  :"August 8",
          image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest?cb=20170906213725"
      },
      {
        name :"Wing Hero: Hawks",
        alias:"Hawks",
        quirk:"Fierce Wings",
        dob  :"December 28",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/e/e4/Hawks.png/revision/latest?cb=20180529011026"
      },
      {
        name :"Nemuri Kayama",
        alias:"18+ Only Hero: Midnight",
        quirk:"Somnambulist",
        dob  :"March 9",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/52/Midnight_Anime_Profile.png/revision/latest?cb=20171015163508"
      },
      {
        name :"Tomoko Shiretoko",
        alias:"Ragdoll",
        quirk:"Search (Formerly) Quirkless (Currently)",
        dob  :"April 8",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/26/Ragdoll_anime_profile.png/revision/latest?cb=20180212134744"
      },
      {
        name :"Hizashi Yamada",
        alias:"Present Mic",
        quirk:"Voice",
        dob  :"July 7",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/8a/Present_Mic_Full_Body.png/revision/latest?cb=20160623013414"
      },
      {
        name :"Sir Nighteye",
        alias:"Allmight's side kick",
        quirk:"Foresight",
        dob  :"January 2",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f4/Nighteye_Color_Scheme.png/revision/latest?cb=20180701011736"
      }
    ],
    vilains:[
      {
        name :"Tenko Shimura",
        alias:"Shigaraki Tomura",
        quirk:"Decay",
        dob  :"Unknown",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/5f/Shigaraki_Anime.png/revision/latest?cb=20170715194548"
      },
      {
          name :"Unknown",
          alias:"All For One",
          quirk:"All For One",
          dob  :"Unknown",
          image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest?cb=20180528014920"
      },
      {
          name :"Unknown",
          alias:"Dabi",
          quirk:"Crematione",
          dob  :"Unknown",
          image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/b/b0/Dabi_anime_profile.png/revision/latest?cb=20170923130039"
      },
      {
        name :"Himiko Toga",
        alias:"Unknown",
        quirk:"Transform",
        dob  :"Unknown",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/d9/Himiko_Toga_Civilian_Full_Body.png/revision/latest?cb=20170923122104"
      },
      {
        name :"Kai Chisaki",
        alias:"Overhaul",
        quirk:"Overhaul",
        dob  :"May 28",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/2f/Overhaul_Anime.png/revision/latest?cb=20180923180009"
      },
      {
        name :"Chizome Akaguro",
        alias:"Hero Killer: Stain ",
        quirk:"Bloodcurdle",
        dob  :"Unknown",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/9/9c/Stain_Anime_Profile.png/revision/latest?cb=20170717012325"
      },
      {
        name :"Jin Bubaigawara",
        alias:"Twice",
        quirk:"Double",
        dob  :"Unknown",
        image:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/3d/Twice_TV_Animation_Design.png/revision/latest?cb=20180313231956"
      }
    ],
    result:[]
}
export default function(state = initialState, action){
     switch(action.type){
        case GET_HEROES: 
             return {
                 ...state,
                 result:state.heroes
                };
               
        case GET_VILAINS: 
             return {
                 ...state,
                 result:state.vilains
                }
        default : 
             return {
                ...state,
                result:state.heroes
             };
    }
}