<template>
  <div class="home">
    <img class="badge" alt="hanshin tiger logo" src="@/assets/HanshinTigersLogo.jpg">
    <h1> THE CURSE OF THE COLONEL</h1>
        <h3> Kaneru Sandasu no Noroi</h3>

        <p>
            One affectation Japanese have with Western Culture is KFC Chicken. 
            Every Christmas, an estimated 3.6 million Japanese families enjoy KFC chicken in what has become a nationwide tradition.
            So, it is not surprising there would be at least one urban legend surrounding KFC and Colonel Sanders.
        </p>

        <div id="fingerlickinggood">
        
            <img class="colonelDateApp" src="https://cdn.glitch.com/61974d1d-2cef-4054-87ec-53d80a05b1a0%2Fcolonelsanders.webp?v=1594221817675" />
            
        <figcaption class="caption">image from <a href="https://store.steampowered.com/app/1121910/I_Love_You_Colonel_Sanders_A_Finger_Lickin_Good_Dating_Simulator">I LOVE YOU, COLONEL SANDERS! A FINGER LICKIN' GOOD DATING SIMULATOR </a></figcaption>
        </div>

        <hr>

        <table>
            <h2>Timeline of Pertinent Events</h2>
            <ul class="timeline">
            <li>In the 1985 Japan Championship Series, underdog Hanshin Tigers of Kansai beat the Yomiuri Giants of Tokyo, widely considered the Kings of Japanese Baseball.</li>
            <li>Hanshin fans erupted in celebration at Ebisu Bridge in Osaka. As a salute to the team, a fan resembling every member
            jumped from the bridge when a player's name was shouted out.</li>
            <li>Randy Bass, an American who later became an Oklahoma State Senator and MVP of the game, did not have a fan that resembled him.</li>
            <li>Fans seized a plastic statue of Colonel Sanders, which resembled Randy Bass, from the nearby KFC and threw it from the bridge.</li>
            <li>After 1985, the Hanshin Tigers endured an 18-year losing streak, often placing in the bottom two positions in their league.</li>
            <li>On March 10, 2009 while dredging the river, divers uncovered the remains of the Colonel Sanders statue. It was missing its left hand and glasses.</li>
            <li>The curse can only be lifted when the left hand and glasses of the original statue are returned to KFC.</li>
            </ul>
        </table>

        <hr>

        <div>
          <h2>Quotes</h2>
          <blockquote>
              The colonel will be kept in police custody for the time being, but Yokakawa said KFC is considering donating him to the home stadium of the Tigers in Osaka.
            <br><a href="http://www.nbcnews.com/id/29629104/ns/world_news-weird_news/t/colonel-sanders-pulled-river-after-years/#.XwNudJNKhle">NBC News.com</a>
            </blockquote>
          <blockquote>
            The "Curse of the Colonel" has also been used as a bogeyman threat to those who would divulge the secret recipe of eleven herbs and spices that result in the unique taste of his chicken.
            <br><a href="https://en.wikipedia.org/wiki/Curse_of_the_Colonel">wikipedia: Curse of the Colonel</a>
          </blockquote>
          <blockquote>
            "He was apparently found standing upright, which is fitting, because although he was a nice man he could also be very strict and demanding," <br> ~ KFC Spokeswoman Sumeo Yokakawa upon recovery of Colonel Sanders statue.
            <br><a href="https://www.dispatch.com/article/20090311/NEWS/303119481">The Columbus Dispatch</a>
          </blockquote>
        </div>  

        <hr>

<standings-comp />

  </div>
</template>

<script>
import StandingsComp from '@/components/StandingsComp.vue'

export default {
  name: 'Home',
  components: {
    StandingsComp,
  }
}
</script>

<style>
.timeline {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 1.5rem;
  color: black;
  margin: 60px;
}

.caption {
  font-size: 1rem;
}

#home {
  display: flex;
  justify-content: center;
}

li {
  margin: 15px;
}

p {
  width: 80%;
  margin-left: 10%;
  text-align: justify;
  font-size: 1.5rem;
}

blockquote {
    font-style: italic;
    text-align: justify;
    color: black;
}

a {
  text-decoration: none;
  text-align: center;
  color: #e7360c;
}

.badge {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 2px 2px 4px black;
  margin: 10px 0px 20px 0px;
}

#fingerlickinggood {
  border: 4px solid #222;
  background-color: #222;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
}

.colonelDateApp {
  width: 100%;
  height: auto;
}

#fingerlickinggood > figcaption > a {
  text-decoration: none;
  color: white;
}

</style>